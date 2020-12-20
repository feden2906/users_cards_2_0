import './SearchHint.css'

export default function SearchHint ({searchItem:{title}}){
    return (
        <div className='hint-item'>
            {title}
        </div>
    );
}