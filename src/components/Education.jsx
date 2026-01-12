import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "BSc (Hons) in Software Engineering",
      school: "Coventry University London",
      location: "School of Computing",
      year: "2023 - Present",
      gpa: "3.82 / 4.00",
      status: "Active",
      color: "border-purple-500"
    },
    {
      degree: "Advanced Diploma in Software Engineering",
      school: "National Institute of Business Management (NIBM)",
      location: "School of Computing",
      year: "2023 - 2024",
      gpa: "3.64 / 4.00",
      status: "Completed",
      color: "border-blue-500"
    },
    {
      degree: "BSc (Hons) in Health ICT",
      school: "University of Kelaniya (GWUIM)",
      location: "School of Computing",
      year: "2022 - On Hold",
      gpa: "3.45 / 4.00",
      status: "On Hold",
      color: "border-yellow-500"
    },
    {
      degree: "Assured Diploma in Information Technology",
      school: "Esoft Metro Campus",
      location: "School of Computing",
      year: "2020 - 2021",
      gpa: "3.50 / 4.00",
      status: "Completed",
      color: "border-green-500"
    }
  ];

  return (
    <div className="relative w-full py-20 px-4 md:px-10" id="education">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-neutral-800 ml-4 md:ml-10 space-y-12">
          
          {educationData.map((edu, index) => (
            <EducationCard key={index} data={edu} index={index} />
          ))}

        </div>
      </div>
    </div>
  );
};

const EducationCard = ({ data, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline Dot */}
      <div className={`absolute -left-[9px] top-0 w-5 h-5 rounded-full border-4 border-[#0d0b16] bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]`}></div>

      {/* Card Content */}
      <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-6 rounded-2xl hover:border-purple-500/30 transition-colors duration-300">
        
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              {data.degree}
            </h3>
            <p className="text-purple-400 font-medium text-lg flex items-center gap-2">
              <GraduationCap size={18} />
              {data.school}
            </p>
            <p className="text-neutral-500 text-sm">{data.location}</p>
          </div>
          
          <div className="flex flex-col md:items-end gap-2">
            <span className="flex items-center gap-2 text-neutral-400 text-sm font-mono bg-neutral-800/50 px-3 py-1 rounded-full border border-neutral-700">
              <Calendar size={14} />
              {data.year}
            </span>
            {data.status === "Active" && (
                <span className="text-xs font-bold text-green-400 bg-green-900/20 px-2 py-1 rounded border border-green-500/30">
                    Currently Studying
                </span>
            )}
          </div>
        </div>

        {/* GPA Badge */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-neutral-800/50">
            <Award size={16} className="text-yellow-500" />
            <span className="text-neutral-300 text-sm">
                GPA: <span className="text-white font-bold">{data.gpa}</span>
            </span>
        </div>

      </div>
    </motion.div>
  );
};

export default Education;