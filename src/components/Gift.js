export default function Gift({ title, id, url }) {
  return (
    <a href={`#${id}`}>
      <div className='Gift'>
        <h4>{title}</h4>
        <img src={url} alt={url} />
      </div>
    </a>
  );
}
