import Spinner from '../../components/Spinner';
import ListOfGifts from '../../components/ListOfGifts/ListOfGifts';
import { useGifts } from '../../hooks/useGifts';

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifts } = useGifts({ keyword });

  return <>{loading ? <Spinner /> : <ListOfGifts gifts={gifts} />}</>;
}
