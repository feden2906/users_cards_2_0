import './Announcement.css'
import React, {useState} from "react";

export default function Announcement(props) {
  const {announcement, index, deleteAnnouncement, editAnnouncement} = props
  const {id, title, description, createDate:{date, month, year, hours, minutes, seconds}} = announcement
  const [flag, setFlag] = useState(false)


  if (flag) {
    return (
        <div className='announcement-wrapper'>
          <div className='announcement-title-wrapper'>
            <p className='title'>{`${index + 1}. ${title}`}</p>
            <div>
              <input onClick={() => editAnnouncement(announcement)} type="button" value='Edit' className='btn yellow'/>
              <input onClick={() => setFlag(false)} type="button" value='Hide' className='btn blue'/>
              <input onClick={() => deleteAnnouncement(id)} type="button" value='Delete' className='btn red'/>
            </div>
          </div>
          <p className='description'>{description}</p>
          <div>
            <p>Created :</p>
            <p>{`${hours}:${minutes}  ${date}.${month}.${year}`}</p>
          </div>
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