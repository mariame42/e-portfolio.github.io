import React from 'react';
import { User, MapPin, Mail, Phone } from 'lucide-react';
import SectionTitle from './SectionTitle';

const AboutMe = () => {
  return (
    <div className="space-y-8">
      <SectionTitle icon={<User />} title="About Me" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src='asset/images/new_pic.jpg' 
              alt="Profile" 
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Mariam Eid</h2>
              <p className="text-blue-600 font-medium">Software Engineering Student</p>
              
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  <span>Abu Dhabi, UAE</span>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="mr-2" />
                  <span>meid@student.42abudhabi.ae</span>
                </div>
                <div className="flex items-center">
                  <Phone size={18} className="mr-2" />
                  <span>+971 52 145 0585</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">About me</h3>
              <p className="text-gray-600 leading-relaxed">
                I’m Mariam, a dedicated software development student at 42 Abu Dhabi.  With a strong foundation in C programming.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                At 42 Abu Dhabi, I developed the skill of learning, which has guided me through various competitions throughout my journey.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">My Journey</h3>
              <p className="text-gray-600 leading-relaxed">
                My journey into programming began as a student at 42 Abu Dhabi. Eight months ago, I began my coding journey with no prior experience, and through hands-on projects, hackathons, and peer learning, I have developed strong problem-solving skills and a deep understanding of programming. 
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                Through rigorous projects and collaborative challenges, I've developed not only technical skills but also critical soft skills such as time management, communication, and resilience in the face of complex problems.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">My Goals</h3>
              <p className="text-gray-600 leading-relaxed">
                I aim to leverage my education at 42 Abu Dhabi to contribute meaningfully to the tech industry, particularly in areas of software innovation that address real-world challenges. I'm especially interested in exploring the intersection of technology and sustainability.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                My immediate goal is to secure an internship that allows me to apply my skills in a professional setting while continuing to grow as a developer and problem-solver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;