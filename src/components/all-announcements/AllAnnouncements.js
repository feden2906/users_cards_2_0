import React from "react";
import './AllAnnouncements.css'
import Announcement from "../announcement/Announcement";
import CreateAnnouncement from "../buttons/create-announcement/CreateAnnouncement";

export default function AllAnnouncements({announcements, setModalState, deleteAnnouncement, editAnnouncement}) {
  return (
      <div className='all-wrap'>
        <CreateAnnouncement setModalState={setModalState}/>
        {announcements.map((value, index) =>
            <Announcement
                announcement={value}
                editAnnouncement={editAnnouncement}
                deleteAnnouncement={deleteAnnouncement}
                index={index}
                key={value.id}
            />
        )}
      </div>
  );
}