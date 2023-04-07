import { useEffect, useState } from 'react';
import { ItemProps } from './../components/types';

export const useFetchMain = (url: string) => {
  const [responseMain, setResponseMain] = useState([]);
  const [isLoadingMain, setIsLoadingMain] = useState(false);
  const [errorMain, setErrorMain] = useState('');

  const fetchDataMain = async (url: string) => {
    try {
      setIsLoadingMain(true);
      const res = await fetch(url);
      const data = await res.json();
      setResponseMain(data.results);
    } catch (err) {
      if (err instanceof Error) {
        setErrorMain(err.message);
      } else {
        setErrorMain('An unknown error occurred.');
      }
    } finally {
      setIsLoadingMain(false);
    }
  };

  useEffect(() => {
    fetchDataMain(url);
  }, [url]);

  return {
    responseMain,
    isLoadingMain,
    errorMain,
    fetchDataMain: (url: string) => fetchDataMain(url),
  };
};

export const useFetchItem = (url: string) => {
  const [responseItem, setResponseItem] = useState<ItemProps>({
    id: '',
    urls: {
      full: '',
    },
    alt_description: '',
    updated_at: '',
    likes: 0,
    description: '',
    user: {
      name: '',
      instagram_username: '',
    },
    width: 0,
    height: 0,
  });
  const [isLoadingItem, setIsLoadingItem] = useState(false);
  const [errorItem, setErrorItem] = useState('');

  const fetchDataItem = async (url: string) => {
    try {
      setIsLoadingItem(true);
      const res = await fetch(url);
      const data = await res.json();
      setResponseItem(data);
    } catch (err) {
      if (err instanceof Error) {
        setErrorItem(err.message);
      } else {
        setErrorItem('An unknown error occurred.');
      }
    } finally {
      setIsLoadingItem(false);
    }
  };

  useEffect(() => {
    fetchDataItem(url);
  }, [url]);

  return {
    responseItem,
    isLoadingItem,
    errorItem,
    fetchDataItem: (url: string) => fetchDataItem(url),
  };
};
