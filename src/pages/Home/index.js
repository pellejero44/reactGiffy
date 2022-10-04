import ListOfGifts from 'components/ListOfGifts/ListOfGifts';
import SearchForm from 'components/SearchForm';
import LazyTrending from 'components/TrendingSearches';
import { useGifts } from 'hooks/useGifts';
import { useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'wouter';

export default function Home() {
  const [path, pushLocation] = useLocation();
  const { loading, gifts } = useGifts({ keyword: 'matrix' });

  const handleSubmit = useCallback(({keyword}) => {
    pushLocation(`/search/${keyword}`);
  }, [pushLocation]);

  

  return (
    <>    
     <Helmet>
        <title> Home| Giffy</title>
      </Helmet>
      <SearchForm onSubmit={handleSubmit}/>
      <h3 className='App-title'>Last search</h3>
      <ListOfGifts gifts={gifts} />
      <h3 className='App-title'>The most popular gifts</h3>
      {<LazyTrending />}
    </>
  );
}
