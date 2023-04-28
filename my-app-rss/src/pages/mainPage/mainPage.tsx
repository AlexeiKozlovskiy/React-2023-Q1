import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchInput } from '../../components/searchInput/searchInput';
import { ImageList } from '../../components/imagesMain/imageList';
import { ImagesProps } from '../../components/types';
import { StateReducerProps } from '../../components/types';
import { Modal } from '../../components/modal/modal';
import { PreloaderCircle } from '../../components/preloader/preloaderCircle';
import { setImagesData, clearImagesData } from '../../components/reducers/imagesSlice';
import {
  useGetSearchCardsQuery,
  useGetStockCardsQuery,
  useGetCardQuery,
} from './../../components/api/cardsApi';

export function MainPage() {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState('hfV9tSBEvlU');
  const dispatch = useDispatch();
  const imagesInStore = useSelector((state: StateReducerProps) => state.images);
  const searchValueInStore = useSelector((state: StateReducerProps) => state.search.searchValue);
  const { data: cardListSearch = [], isFetching: isFetchingSearch } =
    useGetSearchCardsQuery(searchValueInStore);
  const { data: cardListStock = [], isFetching: isFetchingStock } = useGetStockCardsQuery();
  const { data: cardItemClick, isFetching: isFetchingClick } = useGetCardQuery(id);

  useEffect(() => {
    if (!isFetchingSearch && !isFetchingStock) {
      if (searchValueInStore.length !== 0) {
        dispatch(clearImagesData());
        dispatch(setImagesData(cardListSearch));
      } else {
        dispatch(clearImagesData());
        dispatch(setImagesData(cardListStock));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    cardListStock,
    dispatch,
    // cardListSearch,
    isFetchingSearch,
    searchValueInStore.length,
    isFetchingStock,
  ]);

  function handleImageClick(data: ImagesProps) {
    setId(data.id);
    setShowModal(true);
    document.body.style.overflowY = 'hidden';
  }

  function handleClose() {
    setShowModal(false);
    document.body.style.overflowY = 'auto';
  }
  function handleSave() {
    if (cardItemClick) {
      window.open(cardItemClick.urls.full, '_blank');
    }
  }

  return (
    <>
      <main className="main wrapper">
        <section>
          <SearchInput />
          <div>
            {imagesInStore?.length === 0 && !isFetchingStock ? (
              <h1 className="cardList__header wrapper">Nothing found...</h1>
            ) : searchValueInStore ? (
              <h1 className="cardList__header wrapper">You search: {searchValueInStore}</h1>
            ) : (
              ''
            )}
          </div>
          <ImageList
            responseMain={imagesInStore}
            isLoadingMain={isFetchingStock}
            handleImageClick={handleImageClick}
          />
        </section>
      </main>
      {showModal ? (
        <Modal onClose={handleClose}>
          <PreloaderCircle isLoading={isFetchingClick}>
            {!cardItemClick && <div />}
            {cardItemClick && (
              <>
                <img
                  className="modal__image"
                  src={cardItemClick!.urls.full}
                  alt={cardItemClick!.alt_description}
                />
                <div className="modal__text">
                  <div>{cardItemClick!.description}</div>
                  <div data-testid="modal-load">Load {cardItemClick!.updated_at.slice(0, 10)}</div>
                  <div data-testid="modal-likes">♥{cardItemClick!.likes}</div>
                  <div data-testid="modal-load_user">Load user {cardItemClick!.user.name}</div>
                  <div data-testid="modal-load_inst">
                    Load user inst {cardItemClick!.user.instagram_username}
                  </div>
                  <div data-testid="modal-size">
                    Size {cardItemClick!.width}x{cardItemClick!.height}
                  </div>
                </div>
                <button className="modal__btn-save" onClick={handleSave}>
                  Save
                </button>
              </>
            )}
          </PreloaderCircle>
        </Modal>
      ) : null}
    </>
  );
}
