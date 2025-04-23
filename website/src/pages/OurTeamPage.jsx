import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaTools, FaCrown, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const teams = {
  leader: [
    {
      name: '~Shriyukt Gupta~',
      role: 'Team Lead | AI/ML Developer',
      image: 'public/team/shri.jpg',
      linkedin: 'https://www.linkedin.com/in/shriyukt-gupta-12b665277',
      instagram: 'https://www.instagram.com/shriyuktt',
    },
  ],
  software: [
    {
      name: '~Devansh Arya~',
      role: 'Full Stack Developer',
      image: 'public/team/devansh.jpg',
      linkedin: 'https://www.linkedin.com/in/devansh-arya-415378305',
      instagram: 'https://www.instagram.com/devansh_arya021',
    },
    {
      name: '~Shubhanshi Negi~',
      role: 'AI/ML Developer',
      image: 'public/team/shubi.jpg',
      linkedin: 'https://www.linkedin.com/in/shubhanshi-negi-0a4352338',
      instagram: 'https://www.instagram.com/shubhanshi_negi16',
    },
    {
      name: '~Ankit Bisht~',
      role: 'Object Detection & Hardware Developer',
      image: 'public/team/ankit.jpg',
      linkedin: 'https://www.linkedin.com/in/ankit-bisht-8a0b372a2',
      instagram: 'https://www.instagram.com/divya.adhikari_87',
    },
  ],
  hardware: [
    {
      name: '~Kritika Sharma~',
      role: 'Hardware Engineer',
      image: 'public/team/kritika.jpg',
      linkedin: 'https://www.linkedin.com/in/kritika-sharma-geu',
      instagram: 'https://www.instagram.com/kritikabairagi_03',
    },
    {
      name: '~Divya Adhikari~',
      role: 'AI/ML & Hardware Developer',
      image: 'public/team/divya.jpg',
      linkedin: 'https://www.linkedin.com/in/divya-adhikari-213269325',
      instagram: 'https://www.instagram.com/divya.adhikari_87',
    },
  ],
};

const Card = ({ member }) => (
  <div className="w-72 bg-gray-800 rounded-lg overflow-hidden shadow-lg text-center p-4 hover:scale-105 transition-transform">
    <img className="w-24 h-24 rounded-full mx-auto mb-4" src={member.image} alt={member.name} />
    <h3 className="text-white text-lg font-semibold">{member.name}</h3>
    <p className="text-pink-400 text-sm">{member.role}</p>
    <div className="flex justify-center gap-4 mt-2 text-gray-300">
      {member.linkedin && (
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      )}
      {member.instagram && (
        <a href={member.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      )}
    </div>
  </div>
);

const TeamSection = ({ title, icon, members }) => (
  <div className="mb-16">
    <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-2 mb-6">
      {icon} {title}
    </h2>
    <div className="flex flex-wrap justify-center gap-6">
      {members.map((member, idx) => (
        <Card key={idx} member={member} />
      ))}
    </div>
  </div>
);

const OurTeamPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-pink-500 mb-2">Meet Our Team 👨‍💻</h1>
        <p className="text-gray-400 text-sm">Building the future of assistive tech with innovation and teamwork.</p>
      </div>

      <TeamSection title="Team Leader" icon={<FaCrown className="text-yellow-400" />} members={teams.leader} />
      <TeamSection title="Hardware Team" icon={<FaTools className="text-green-400" />} members={teams.hardware} />
      <TeamSection title="Software Team" icon={<FaLaptopCode className="text-blue-400" />} members={teams.software} />
    </div>
  );
};

export default OurTeamPage;
