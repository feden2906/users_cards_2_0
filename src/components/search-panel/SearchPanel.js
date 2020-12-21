import React, {useState} from 'react';
import './SearchPanel.css'
import SearchHint from "../search-hint/SearchHint";

export default function SearchPanel({announcements, findAnnouncements, setShowArr, showArr}) {
  const [newSearchValue, setNewSearchValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [showHintBlock, setHintState] = useState(false)
  let hintArr = [];

  if (searchValue) {
    const allHints = announcements.filter(value => value.title.includes(`${searchValue}`));

    allHints.length > 3
        ? hintArr = allHints.splice(0, 3)
        : hintArr = allHints
  }

  const clickOnHint = (title) => {
    setNewSearchValue(title)
    setSearchValue('')
    document.body.getElementsByClassName('input-panel')[0].value = title
    setHintState(false)
  }

  const showAll = () => {
    setShowArr([])
  }

  return (
      <div>
        <div className='wrapper-panel'>
          <input onChange={(e) => {
                 setSearchValue(e.currentTarget.value)
                 setHintState(true)
          }}
                 defaultValue={newSearchValue} className='input-panel' type="text"/>
          <input onClick={() => findAnnouncements(newSearchValue, searchValue, setHintState)}
                 className='btn-panel'
                 type='button'
                 value='Search'/>
        </div>
        {showHintBlock &&
                <div className='hints-wrapper'>
                  <div className='hints-wrapper-2'>
                    {searchValue && hintArr.map(value => <SearchHint searchItem={value} key={value.id}
                                                                     clickOnHint={clickOnHint}/>)}
                  </div>
                </div>
        }
        {showArr.length > 0 &&
                <div className='btn-show-all-wrapper'>
                  <input onClick={showAll} type="button" className='btn-panel' value='Show all'/>
                </div>
        }

      </div>
  );
}