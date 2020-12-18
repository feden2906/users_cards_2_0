import './CreateAnnouncement.css'
import React from "react";

export default function CreateAnnouncement({setModalState}) {
  return (
      <button onClick={() => setModalState('show')} className='btn-create-announcement'>Create</button>
  );
}