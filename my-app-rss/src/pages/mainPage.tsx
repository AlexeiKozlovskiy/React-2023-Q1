import SearchInput from '../components/searchInput/searchInput';
import { ImageList } from '../components/image/imageList';
import React, { createContext, useState, useRef } from 'react';
import { useFetchMain, useFetchItem } from '../components/useFetch';
import { ImageContextType, ImagesProps } from './../components/types';
import { baseUrl, accessKey } from './../utils';
import { Modal } from './../components/modal/modal';
import { PreloaderCircle } from './../components/preloader/preloaderCircle';

export const ImageContext = createContext<ImageContextType>({
  responseMain: [],
  isLoadingMain: false,
  errorMain: null,
  fetchDataMain: () => Promise.resolve(),
  searchImage: '',
  setSearchImage: () => {},
  handleImageClick: () => {},
});

export function MainPage() {
  const savedInputValue = useRef(localStorage.getItem('inputValue') || 'new');
  const [searchImage, setSearchImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { responseMain, isLoadingMain, errorMain, fetchDataMain } = useFetchMain(
    `${baseUrl}/search/photos?page=1&query=${savedInputValue.current}/&client_id=${accessKey}`
    // `${baseUrl}/photos/?&client_id=${accessKey}`
  );
  const { responseItem, isLoadingItem, fetchDataItem } = useFetchItem('');

  function handleImageClick(data: ImagesProps) {
    setShowModal(true);
    fetchDataItem(`${baseUrl}/photos/${data.id}/?&client_id=${accessKey}`);
    document.body.style.overflowY = 'hidden';
  }

  function handleClose() {
    setShowModal(false);
    document.body.style.overflowY = 'auto';
  }
  function handleSave() {
    window.open(responseItem.urls.full, '_blank');
  }

  const value = {
    responseMain,
    isLoadingMain,
    errorMain: errorMain ? new Error(errorMain) : null,
    fetchDataMain,
    searchImage,
    setSearchImage,
    handleImageClick,
  };

  return (
    <ImageContext.Provider value={value}>
      <main className="main wrapper">
        <section>
          <SearchInput />
          {savedInputValue.current === 'new' && !searchImage ? (
            ''
          ) : (
            <div>
              {savedInputValue.current ? (
                <h1 className="cardList__header wrapper">
                  You search: {searchImage !== '' ? searchImage : savedInputValue.current}
                </h1>
              ) : (
                ''
              )}
            </div>
          )}
          <ImageList responseMain={responseMain} isLoadingMain={isLoadingMain} />
        </section>
      </main>
      {showModal ? (
        <Modal onClose={handleClose}>
          <PreloaderCircle isLoading={isLoadingItem}>
            <img
              className="modal__image"
              src={responseItem.urls.full}
              alt={responseItem.alt_description}
            />
            <div className="modal__text">
              <div>{responseItem.description}</div>
              <div>
                <span>Load date</span> {responseItem.updated_at.slice(0, 10)}
              </div>
              <div>
                <span>Load</span> {responseItem.user.name}
              </div>
              <div>
                {' '}
                <span>Load user inst</span> {responseItem.user.instagram_username}
              </div>
              <div>
                <span>Size </span>
                {responseItem.width}x{responseItem.height}
              </div>
              <div>&#9829;{responseItem.likes}</div>
            </div>
            <button onClick={handleSave} className="modal__btn">
              Save
            </button>
          </PreloaderCircle>
        </Modal>
      ) : null}
    </ImageContext.Provider>
  );
}
