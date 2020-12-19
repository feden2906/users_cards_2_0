import './Announcement.css'
import React, {useState} from "react";

export default function Announcement({announcement: {id, title, description}, index, deleteAnnouncement}) {
  const [flag, setFlag] = useState(false)


  if (flag) {
    return (
        <div className='announcement-wrapper'>
          <div className='announcement-title-wrapper'>
            <p className='title'>{`${index + 1}. ${title}`}</p>
            <div>
              <input type="button" value='Edit' className='btn yellow'/>
              <input onClick={() => setFlag(false)} type="button" value='Hide' className='btn blue'/>
              <input onClick={() => deleteAnnouncement(id)} type="button" value='Delete' className='btn red'/>
            </div>
          </div>
          <p className='description'>{description}</p>
        </div>
    )
  } else {
    return (
        <div className='announcement-wrapper'>
          <div className='announcement-title-wrapper'>
            <p className='title'>{`${index + 1}. ${title}`}</p>
            <div className='btn-announcement-wrapper'>
              <input onClick={() => setFlag(true)} type="button" value='Details' className='btn blue'/>
              <input onClick={() => deleteAnnouncement(id)} type="button" value='Delete' className='btn red'/>
            </div>
          </div>
        </div>
    )
  }


}