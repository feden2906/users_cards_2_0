import './CreateAnnouncement.css'
import React from "react";

export default function CreateAnnouncement({setModalState}) {
  return (
      <button onClick={(e) => setModalState('Create')} className='btn-create-announcement'>Create</button>
  );
}