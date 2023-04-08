import React, { useState, useEffect, useRef, useContext, KeyboardEventHandler } from 'react';
import { ImageContext } from '../../pages/mainPage/mainPage';
import { baseUrl } from '../../utils';

function SearchInput() {
  const savedInputValue = useRef(localStorage.getItem('inputValue') || '');
  const [inputValue, setInputValue] = useState(savedInputValue.current);
  const { fetchDataMain, setSearchImage } = useContext(ImageContext);

  useEffect(() => {
    return () => {
      localStorage.setItem('inputValue', savedInputValue.current);
    };
  }, []);

  useEffect(() => {
    savedInputValue.current = inputValue;
  }, [inputValue]);

  const search = () => {
    fetchDataMain(
      `${baseUrl}/search/photos?page=1&query=${inputValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    setSearchImage(inputValue);
  };

  const handleEnterSearch: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  const handleButtonSearch = () => {
    search();
  };
  return (
    <div className="searchInput__wrapper wrapper">
      <input
        type="search"
        maxLength={35}
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleEnterSearch}
      />
      <button onClick={handleButtonSearch} disabled={!inputValue} className="searchInput__btn">
        Search
      </button>
    </div>
  );
}

export default SearchInput;
