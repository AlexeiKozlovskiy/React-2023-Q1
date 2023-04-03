import React, { useState, useEffect } from 'react';

interface SearchInputState {
  inputValue: string;
}

function SearchInput() {
  const [searchInputState, setSearchInput] = useState<SearchInputState>({
    inputValue: '',
  });

  useEffect(() => {
    const savedInputValue = localStorage.getItem('inputValue');
    if (savedInputValue) {
      setSearchInput({ inputValue: savedInputValue });
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;
    setSearchInput({ inputValue: event.target.value });
    localStorage.setItem('inputValue', newInputValue);
  };

  const handleClearInput = () => {
    setSearchInput({ inputValue: '' });
    localStorage.removeItem('inputValue');
  };

  return (
    <div className="searchInput__wrapper wrapper">
      <input
        type="text"
        maxLength={35}
        placeholder="Search"
        value={searchInputState.inputValue}
        onChange={handleChange}
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
