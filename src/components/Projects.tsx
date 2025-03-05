import React from 'react';
import { Code, ExternalLink, Github, Calendar } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Projects = () => {
  const projects = [
    {
      title: 'para_legal_news',
      description: 'Me and my team we started this website, which features an AI agent, during the SambaNova hackathon, and we have been continuously developing it to become a fully functional website.',
      technologies: ['Ai', 'Data Base', 'Algorithms', 'Teamwork'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      github: 'https://github.com/madihanazar/para_legal_news',
      demo: null,
      date: 'Nov 2024'
    },
    {
      title: 'minishell',
      description: 'A simplified shell implementation in C, featuring command execution, pipes, redirections, and environment variable management.',
      technologies: ['C', 'Unix', 'Process Management'],
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      github: 'https://github.com/nasqnik/minishell',
      demo: null,
      date: 'Feb 2025'
    },
    {
      title: 'Personal Portfolio',
      description: 'A responsive portfolio website for Learning to learn modile',
      technologies: ['TypeScript', 'Ai'],
      image: 'asset/images/e-portfolio.jpg',
      github: 'https://github.com/mariame42/web_page',
      demo: null,
      date: 'May 2025'
    },
    {
      title: 'The Guider',
      description: 'The Guider is a robot I am developing with the robotics team. It is designed to guide people at 42 and will be powered by AI.',
      technologies: ['Ros 3', 'Linix'],
      image: 'asset/images/robot.jpg',
      github: null,
      demo: null,
      date: '2025'
    },
    {
      title: 'Secret Hackathons',
      description: 'Secret Hackathons is one of the projects I am working on. It is intended to be a series of hackathons at 42, each featuring a known subject for the participants in advance.',
      technologies: ['Problem-Solving', 'Teamwork'],
      image: 'asset/images/hackathon.jpg',
      github: null,
      demo: null,
      date: '2025'
    },
  ];

  return (
    <div className="space-y-8">
      <SectionTitle icon={<Code />} title="Projects" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            
            <div className="p-5 flex-grow">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={14} className="mr-1" />
                  {project.date}
                </div>
              </div>
              
              <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
              
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="px-5 py-3 border-t border-gray-200 flex justify-between">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 flex items-center text-sm font-medium"
              >
                <Github size={16} className="mr-1" />
                GitHub
              </a>
              
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 flex items-center text-sm font-medium"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;