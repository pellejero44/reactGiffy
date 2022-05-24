import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import ListOfGifts from '../../components/ListOfGifts/ListOfGifts';
import { useGifts } from '../../hooks/useGifts';

const POPULAR_GIFTS = ['Matrix', 'Brazil'];

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();
  const { loading, gifts } = useGifts({ keyword: 'matrix' });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search a gif here ...'
          value={keyword}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
      <h3 className='App-title'>Last search</h3>
      <ListOfGifts gifts={gifts} />
      <h3 className='App-title'>The most popular gifts</h3>
      <ul>
        {POPULAR_GIFTS.map((popularGift) => (
          <li key={popularGift}>
            <Link to={`/search/${popularGift}`}> Gifts of {popularGift}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
