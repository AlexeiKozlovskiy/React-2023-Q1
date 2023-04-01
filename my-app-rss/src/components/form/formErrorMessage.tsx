import React from 'react';

interface ErrorMessage {
  message: string | null;
}

export function ErrorMessage({ message }: ErrorMessage) {
  return <div className="input__error-message">{message}</div>;
}
