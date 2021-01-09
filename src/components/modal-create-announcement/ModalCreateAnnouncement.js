import React, {useState} from 'react';
import './ModalCreateAnnouncement.css'

export default function ModalCreateAnnouncement({closeModal, addAnnouncementToArr, modalType, modalEdit}) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
      <div className='modal-wrapper-announcement'>
        <div className='modal-form-announcement'>
          <h2><b>{`${modalType} Announcement`}</b></h2>
          <div className='modal-input-wrapper-announcement'>
            <span><b className='af-fs20'>Title :</b></span>
            {
              modalEdit
                  ? <input
                      onInput={(e) => setTitle(e.currentTarget.value)}
                      className='modal-input-announcement'
                      type="text"
                      defaultValue={modalEdit.announcement.title}
                  />
                  : <input
                      onInput={(e) => setTitle(e.currentTarget.value)}
                      className='modal-input-announcement'
                      type="text"
                  />
            }

          </div>
          <div className='modal-input-wrapper-announcement'>
            <span><b className='af-fs20'>Description :</b></span>
            {
              modalEdit
                  ? <textarea
                      onInput={(e) => setDescription(e.currentTarget.value)}
                      className='modal-input-announcement resize'
                      cols="40" rows="5"
                      defaultValue={modalEdit.announcement.description}/>

                  : <textarea
                      onInput={(e) => setDescription(e.currentTarget.value)}
                      className='modal-input-announcement resize'
                      cols="40" rows="5"/>
            }

          </div>
          <div className='modal-btn-wrapper-announcement'>
            <button
                onClick={() => addAnnouncementToArr(title, description)}
                className='modal-btn-announcement'>{modalType}
            </button>
            <button onClick={() => closeModal()} className='modal-btn-announcement'>Close</button>
          </div>
        </div>
      </div>
  );
}

