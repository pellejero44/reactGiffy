import { useContext, useEffect, useState } from 'react';
import GiftsContextProvider from '../context/GiftsContext';
import getGifts from '../services/getGifts';

export function useGifts({ keyword } = { keyword: null }) {
  const { gifts, setGifts } = useContext(GiftsContextProvider);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      setLoading(true);
      const keywordToUse =
        keyword || localStorage.getItem('lastKeyword') || 'random';

      if (keyword)
        getGifts({ keyword: keywordToUse }).then((gifts) => {
          setGifts(gifts);
          setLoading(false);
          localStorage.setItem('lastKeyword', keyword);
        });
    },
    [keyword, setGifts]
  );

  return { loading, gifts };
}
