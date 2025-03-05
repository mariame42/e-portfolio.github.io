import React, { ReactNode } from 'react';

interface SectionTitleProps {
  icon: ReactNode;
  title: string;
}

const SectionTitle = ({ icon, title }: SectionTitleProps) => {
  return (
    <div className="flex items-center mb-6">
      <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
  );
};

export default SectionTitle;