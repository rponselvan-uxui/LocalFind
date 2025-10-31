import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background-light dark:bg-background-dark">
      <div className="size-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
};

export default LoadingSpinner;