import React, {useState} from 'react';
import './Announcements.css'
import SearchPanel from "../search-panel/SearchPanel";
import DontCreate from "../dont-create/DontCreate";
import ModalCreateAnnouncement from "../modal-create-announcement/ModalCreateAnnouncement";
import AllAnnouncements from "../all-announcements/AllAnnouncements";

export default function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [modal, setModalState] = useState(null);
  const [modalEdit, setModalEditState] = useState(false);

  const addAnnouncementToArr = (title, description) => {
    setModalState(null)
    const arr = JSON.parse(JSON.stringify(announcements))
    let id = null
    if (announcements.length > 0) {
      id = announcements[announcements.length - 1].id + 1
    } else {
      id = 1
    }
    // TODO time
    arr.push({title, description, id})
    setAnnouncements(arr)
    setModalEditState(false)

  }

  const editAnnouncement = (announcement) => {
    const arr = announcements.filter(value => value.id !== announcement.id)
    console.log(arr)
    setModalEditState({announcement})
    setModalState('Edit')
  }

  const closeModal = () => {
    setModalEditState(false)
    setModalState(null)
  }

  const deleteAnnouncement = (id) => {
    setAnnouncements(announcements.filter(value => value.id !== id))
  }

  return (
      <div className='announcements-wrapper'>
        <h2 className='text-announcements'>Announcements</h2>
        <SearchPanel/>
        {
          announcements.length > 0
              ? <AllAnnouncements
                    editAnnouncement={editAnnouncement}
                    announcements={announcements}
                    setModalState={setModalState}
                    deleteAnnouncement={deleteAnnouncement}/>
              : <DontCreate setModalState={setModalState}/>
        }
        {modal && <ModalCreateAnnouncement
                    modalType={modal}
                    modalEdit={modalEdit}
                    closeModal={closeModal}
                    setAnnouncements={setAnnouncements}
                    addAnnouncementToArr={addAnnouncementToArr}
                  />
        }
      </div>
  );
}