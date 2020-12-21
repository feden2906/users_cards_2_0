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
    let id = null
    if (modalEdit) {
      const chosenAnnouncement = arr.find(value => value.id)
      chosenAnnouncement.title = title
      chosenAnnouncement.description = description
    } else {
      (announcements.length > 0)
          ? id = announcements[announcements.length - 1].id + 1
          : id = 1
      const year = new Date().getFullYear()
      const month = new Date().getMonth() + 1
      const date = new Date().getDate()
      const hours = new Date().getHours()
      const minutes = new Date().getMinutes()
      const seconds = new Date().getSeconds()
      const createDate = {date, month, year, hours, minutes, seconds}
      arr.push({id, title, description, createDate})
    }


    setAnnouncements(arr)
    setModalState(false)
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