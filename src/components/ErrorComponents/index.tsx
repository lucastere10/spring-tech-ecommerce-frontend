// ErrorComponent.tsx
import React from 'react';
import { Button } from '../ui/button';

const ErrorComponent: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className="mt-12 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-semibold text-gray-700 dark:text-gray-200">{error.title}</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-3 mt-2">{error.userMessage}</p>
      <p className="text-gray-700 dark:text-gray-300 mb-3 mt-0">Status: {error.status}</p>
      <Button>Voltar</Button>
    </div>
  );
};

export default ErrorComponent;
