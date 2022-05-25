import { useContext, useEffect, useState } from 'react';
import GiftsContextProvider from 'context/GiftsContext';
import getGifts from 'services/getGifts';

const INITIAL_PAGE = 0;

export function useGifts({ keyword } = { keyword: null }) {
  const { gifts, setGifts } = useContext(GiftsContextProvider);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

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

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return;

      setLoadingNextPage(true);
      getGifts({ keyword, page }).then((nextGifts) => {
        setGifts((previousGifts) => previousGifts.concat(nextGifts));
        setLoadingNextPage(false);
      });
    },
    [page, keyword, setGifts]
  );
  return { loading, loadingNextPage, gifts, setPage };
}
