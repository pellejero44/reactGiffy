import { Link } from 'wouter';

export default function Gift({ title, id, url }) {
  return (
    <Link to={`/gif/${id}`} className='Gif-link'>
      <div className='Gift'>
        <h4>{title}</h4>
        <img loading='lazy' src={url} alt={url} />
      </div>
    </Link>
  );
}
