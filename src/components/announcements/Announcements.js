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
    const arr = JSON.parse(JSON.stringify(announcements))
    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1
    const date = new Date().getDate()
    const hours = new Date().getHours()
    const minutes = new Date().getMinutes()
    let id = null;

    if (modalEdit) {
      const chosen = arr.find(value => value.id)
      const editDate = {date, month, year, hours, minutes}
      chosen.title = title
      chosen.description = description
      chosen.editDate = editDate
    } else {
      (announcements.length > 0)
          ? id = announcements[announcements.length - 1].id + 1
          : id = 1
      const createDate = {date, month, year, hours, minutes}
      arr.push({id, title, description, createDate})
    }

    setAnnouncements(arr)
    setModalState(false)
    setModalEditState(false)
  }

  const editAnnouncement = (announcement) => {
    // const arr = announcements.filter(value => value.id !== announcement.id)

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