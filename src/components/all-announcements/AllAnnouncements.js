import Announcement from "../announcement/Announcement";
import React from "react";
import CreateAnnouncement from "../buttons/create-announcement/CreateAnnouncement";

export default function AllAnnouncements ({announcements, setModalState, deleteAnnouncement}){
  // const [chosen, setChosen] = useState
    return (
        <div>
            <CreateAnnouncement setModalState={setModalState}/>
            {announcements.map((value, index) =>
              <Announcement
                  announcement={value}
                  deleteAnnouncement={deleteAnnouncement}
                  index={index}
                  key={value.id}
              />
            )}
        </div>
    );
}