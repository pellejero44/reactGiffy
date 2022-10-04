import { useState, useEffect } from 'react';

import getSingleGif from 'services/getSingleGift';
import { useGifts } from './useGifts';

export default function useSingleGift({ id }) {
  const { gifts } = useGifts();
  const gifFromCache = gifts.find((singleGif) => singleGif.id === id);

  const [gift, setGift] = useState(gifFromCache);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(
    function () {
      if (!gift) {
        setIsLoading(true);
        getSingleGif({ id })
          .then((gif) => {
            setGift(gif);
            setIsLoading(false);
            setIsError(false);
          })
          .catch((err) => {
            setIsLoading(false);
            setIsError(true);
          });
      }
    },
    [gift, id]
  );

  return { gift, isLoading, isError };
}
