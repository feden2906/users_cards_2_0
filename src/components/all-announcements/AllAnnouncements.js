import Announcement from "../announcement/Announcement";
import React from "react";
import CreateAnnouncement from "../buttons/create-announcement/CreateAnnouncement";

export default function AllAnnouncements ({announcements, setModalState}){
    return (
        <div>
            {announcements.map(value => <Announcement announcement={value} key={value.id}/>)}
            <CreateAnnouncement setModalState={setModalState}/>
        </div>
    );
}