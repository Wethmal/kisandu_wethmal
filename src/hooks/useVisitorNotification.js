import { useEffect } from 'react';

const useVisitorNotification = () => {
  const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  useEffect(() => {
    // Optional: Only run in production to avoid spamming yourself during development
    // if (import.meta.env.MODE !== 'production') return;

    const sendNotification = async () => {
      if (!BOT_TOKEN || !CHAT_ID) {
        console.warn('Telegram Bot Token or Chat ID is missing in .env file.');
        return;
      }

      const userAgent = navigator.userAgent;
      const timestamp = new Date().toLocaleString();
      const pageUrl = window.location.href;

      const message = `
*New Portfolio Visit Detected*
---
*Device Details*: \`${userAgent}\`
*Visit Time*: ${timestamp}
*Page URL*: ${pageUrl}
      `.trim();

      try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: 'Markdown',
          }),
        });
      } catch (error) {
        console.error('Error sending Telegram notification:', error);
      }
    };

    sendNotification();
  }, [BOT_TOKEN, CHAT_ID]);
};

export default useVisitorNotification;
