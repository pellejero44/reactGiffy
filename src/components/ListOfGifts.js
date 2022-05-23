import { useEffect, useState } from 'react';
import Gift from './Gift';
import getGits from '../services/getGifts';

export default function ListOfGifts({ params }) {
  const { keyword } = params;
  const [gifts, setGifts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      setLoading(true);
      getGits({ keyword }).then(setGifts).then(setLoading(false));
    },
    [keyword]
  );

  if (loading) return <i>loading...</i>;

  return gifts.map(({ title, url, id }) => (
    <Gift title={title} url={url} id={id} key={id} />
  ));
}
