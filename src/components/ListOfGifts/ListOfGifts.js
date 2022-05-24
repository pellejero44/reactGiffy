import Gift from '../Gift/Gift';
import './ListOfGifts.css';

export default function ListOfGifts({ gifts }) {
  return (
    <div className='ListOfGifts'>
      {gifts.map(({ title, url, id }) => (
        <Gift title={title} url={url} id={id} key={id} />
      ))}
    </div>
  );
}
