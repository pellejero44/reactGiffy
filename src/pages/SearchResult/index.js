import Spinner from 'components/Spinner';
import ListOfGifts from 'components/ListOfGifts/ListOfGifts';
import { useGifts } from 'hooks/useGifts';
import useNearScreen from 'hooks/useNearScreen';
import { useCallback, useEffect, useRef } from 'react';
import debounce from 'just-debounce-it';
import useSEO from 'hooks/useSEO';
import { Helmet } from 'react-helmet';

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifts, setPage } = useGifts({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const title = gifts
    ? `${gifts.length} results of ${keyword}`
    : loading
    ? 'Loading...'
    : '';
  useSEO({ title });

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>{title} || Giffy</title>
            <meta name='description' content={title} />
          </Helmet>
          <ListOfGifts gifts={gifts} />

          <br />
          <div id='visor' ref={externalRef}></div>
        </>
      )}
    </>
  );
}
