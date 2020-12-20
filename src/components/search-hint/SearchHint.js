import './SearchHint.css'

export default function SearchHint({searchItem: {title}, clickOnHint}) {
  return (
      <div className='hint-item' onClick={() => clickOnHint(title)}>
        {title}
      </div>
  );
}