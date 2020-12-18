import React, {useState} from 'react';
import './Announcements.css'
import SearchPanel from "../search-panel/SearchPanel";
import Announcement from "../announcement/Announcement";
import DontCreate from "../dont-create/DontCreate";
import ModalCreateAnnouncement from "../modal-create-announcement/ModalCreateAnnouncement";

export default function Announcements() {
  const [announcements, setAnnouncements] = useState(null);
  const [modal, setModalState] = useState(null);


  return (
      <div className='announcements-wrapper'>
        <h2 className='text-announcements'>Announcements</h2>
        <SearchPanel/>
        {
          announcements
              ? announcements.map(value => <Announcement announcement={value} key={value.id}/>)
              : <DontCreate setModalState={setModalState}/>
        }
        {modal && <ModalCreateAnnouncement setModalState={setAnnouncements}/>}
      </div>
  );
}