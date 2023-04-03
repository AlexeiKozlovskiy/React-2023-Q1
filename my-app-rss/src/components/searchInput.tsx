import React, { useState, useEffect, useRef } from 'react';

function SearchInput() {
  const savedInputValue = useRef(localStorage.getItem('inputValue') || '');
  const [inputValue, setInputValue] = useState(savedInputValue.current);

  useEffect(() => {
    return () => {
      localStorage.setItem('inputValue', savedInputValue.current);
    };
  }, []);

  useEffect(() => {
    savedInputValue.current = inputValue;
  }, [inputValue]);

  const handleClearInput = () => {
    setInputValue('');
    localStorage.removeItem('inputValue');
  };

  return (
    <div className="searchInput__wrapper wrapper">
      <input
        type="text"
        maxLength={35}
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div
        className="searchInput__cross"
        data-testid="clear-button"
        onClick={handleClearInput}
      ></div>
    </div>
  );
}

export default SearchInput;
