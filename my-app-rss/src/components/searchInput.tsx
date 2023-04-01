import React, { useState } from 'react';

interface SearchInputState {
  inputValue: string;
}

function SearchInput() {
  const [searchInputState, setFearchInput] = useState<SearchInputState>({
    inputValue: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFearchInput({ inputValue: event.target.value });
  };

  const handleClearInput = () => {
    setFearchInput({ inputValue: '' });
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
      <div className="searchInput__cross" onClick={handleClearInput}></div>
    </div>
  );
}

export default SearchInput;
