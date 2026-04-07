import { useEffect } from 'react';

const useVisitorNotification = () => {
  const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  useEffect(() => {
    // Optional: Only run in production to avoid spamming yourself during development
    // if (import.meta.env.MODE !== 'production') return;

    const sendNotification = async () => {
      if (!BOT_TOKEN || !CHAT_ID) {
        console.warn('Telegram Bot Token or Chat ID is missing in environment variables.');
        return;
      }

      let geoData = {
        ip: "Unknown",
        city: "Unknown",
        region: "Unknown",
        country_name: "Unknown",
        org: "Unknown",
        latitude: null,
        longitude: null
      };

      try {
        // Fetch geolocation data from ipapi.co (Free tier)
        const response = await fetch('https://ipapi.co/json/');
        if (response.ok) {
          geoData = await response.json();
        }
      } catch (error) {
        console.error('Error fetching geolocation data:', error);
      }

      const userAgent = navigator.userAgent;
      const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
      const deviceType = isMobile ? "📱 Mobile" : "💻 Desktop";
      const timestamp = new Date().toLocaleString();
      const pageUrl = window.location.href;

      // Generate Google Maps link if coordinates are available
      const mapsLink = geoData.latitude && geoData.longitude 
        ? `\n📍 [View on Google Maps](https://www.google.com/maps?q=${geoData.latitude},${geoData.longitude})`
        : "";

      const message = `
*🚨 Detailed Visitor Alert*
---
*IP Address*: \`${geoData.ip}\`
*Location*: ${geoData.city}, ${geoData.region}, ${geoData.country_name}
*ISP*: ${geoData.org}
*Device*: ${deviceType}
*Visit Time*: ${timestamp}
*Page URL*: ${pageUrl}${mapsLink}

*User-Agent Bits*: \`${userAgent.substring(0, 100)}...\`
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
