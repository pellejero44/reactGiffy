import Gift from 'components/Gift/Gift';
import GiftsContext from 'context/GiftsContext';
import useGlobalGifts from 'hooks/useGlobalGifts';

export default function Detail({ params }) {
  const gifts = useGlobalGifts(GiftsContext);
  const gift = gifts.find((singleGift) => singleGift.id === params.id);

  return <Gift {...gift} />;
}
