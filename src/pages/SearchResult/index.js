import Spinner from 'components/Spinner';
import ListOfGifts from 'components/ListOfGifts/ListOfGifts';
import { useGifts } from 'hooks/useGifts';

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifts, setPage } = useGifts({ keyword });

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  return (
    <>
      {loading ? <Spinner /> : <ListOfGifts gifts={gifts} />} <br />
      <button onClick={handleNextPage}>Next Page</button>
    </>
  );
}
