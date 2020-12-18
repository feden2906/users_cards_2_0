import './SearchPanel.css'

export default function SearchPanel (){
    return (
        <div className='wrapper-panel'>
            <input className='input-panel' type="text"/>
            <input className='btn-panel' type={'button'} value='Search' />
        </div>
    );
}