import React, {useState} from 'react';
import './SearchPanel.css'
import SearchHint from "../search-hint/SearchHint";

export default function SearchPanel({announcements}) {
  const [searchValue, setSearchValue] = useState('')
  let hintArr = [];

  if (searchValue) {
    const allHints = announcements.filter(value => value.title.includes(`${searchValue}`));

    allHints.length > 3
        ? hintArr = allHints.splice(0, 3)
        : hintArr = allHints
  }

  return (
      <div>
        <div className='wrapper-panel'>
          <input onChange={(e) => setSearchValue(e.currentTarget.value)}
                 className='input-panel' type="text"/>
          <input className='btn-panel' type={'button'} value='Search'/>
        </div>
        <div className='hints-wrapper'>
          <div className='hints-wrapper-2'>
            {searchValue && hintArr.map(value => <SearchHint searchItem={value} key={value.id}/>)}
          </div>
        </div>
      </div>
  );
}