import Spinner from 'components/Spinner';
import ListOfGifts from 'components/ListOfGifts/ListOfGifts';
import { useGifts } from 'hooks/useGifts';
import useNearScreen from 'hooks/useNearScreen';
import { useCallback, useEffect, useRef } from 'react';
import debounce from 'just-debounce-it';

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifts, setPage } = useGifts({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage(prevPage => prevPage + 1), 200),
    [setPage]
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  return (
    <>
      {loading ? <Spinner /> : <ListOfGifts gifts={gifts} />} <br />
      <div id='visor' ref={externalRef}></div>
    </>
  );
}
