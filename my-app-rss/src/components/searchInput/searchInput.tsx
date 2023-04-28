import React, { useState, KeyboardEventHandler, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setImagesData, clearImagesData } from '../reducers/imagesSlice';
import { setSearchData, clearSearchData } from '../reducers/searchSlice';
import { useSelector } from 'react-redux';
import { StateReducerProps } from '../../components/types';
import { useGetSearchCardsQuery, useGetStockCardsQuery } from './../../components/api/cardsApi';

function SearchInput() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const searchValueInStore = useSelector((state: StateReducerProps) => state.search.searchValue);

  useEffect(() => {
    if (searchValueInStore.length !== 0) {
      setInputValue(searchValueInStore);
    }
  }, [searchValueInStore]);

  const { data: cardListSearch = [] } = useGetSearchCardsQuery(searchValueInStore);
  const { data: cardListStock = [] } = useGetStockCardsQuery();

  async function search() {
    dispatch(setSearchData(inputValue));
    dispatch(clearImagesData());
    dispatch(setImagesData(cardListSearch));
  }

  const handleEnterSearch: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter' && inputValue.length !== 0) {
      search();
    }
  };

  const handleButtonSearch = () => {
    search();
  };

  async function handleClearInput() {
    setInputValue('');
    dispatch(clearSearchData());
    dispatch(clearImagesData());
    dispatch(setImagesData(cardListStock));
  }

  return (
    <div className="searchInput__wrapper wrapper">
      <input
        className="searchInput__input"
        type="text"
        maxLength={35}
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleEnterSearch}
      />
      <div
        data-testid="cross-button"
        className="searchInput__cross"
        onClick={handleClearInput}
      ></div>
      <button onClick={handleButtonSearch} disabled={!inputValue} className="searchInput__btn">
        Search
      </button>
    </div>
  );
}

export default SearchInput;
