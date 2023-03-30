import React from 'react';

interface ErrorMessage {
  message: string | null;
}

export const ErrorMessage: React.FC<ErrorMessage> = ({ message }) => {
  return <div className="input__error-message">{message}</div>;
};
