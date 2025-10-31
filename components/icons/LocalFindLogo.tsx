import React from 'react';

// We add an interface to explicitly define the "className" prop
interface LocalFindLogoProps {
  className?: string;
}

// We use React.FC<LocalFindLogoProps> to apply the type
const LocalFindLogo: React.FC<LocalFindLogoProps> = ({ className }) => {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z"></path>
    </svg>
  );
};

export default LocalFindLogo;