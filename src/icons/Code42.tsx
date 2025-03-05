import React from 'react';

interface Code42Props {
  className?: string;
}

export const Code42 = ({ className = '' }: Code42Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 18L18 20L22 16" />
      <path d="M8 6H4C2.89543 6 2 6.89543 2 8V16C2 17.1046 2.89543 18 4 18H8" />
      <path d="M12 10H16C17.1046 10 18 9.10457 18 8V4C18 2.89543 17.1046 2 16 2H12C10.8954 2 10 2.89543 10 4V8C10 9.10457 10.8954 10 12 10Z" />
      <path d="M12 22H16C17.1046 22 18 21.1046 18 20V16C18 14.8954 17.1046 14 16 14H12C10.8954 14 10 14.8954 10 16V20C10 21.1046 10.8954 22 12 22Z" />
    </svg>
  );
};