import './DontCreate.css'
import CreateAnnouncement from "../buttons/create-announcement/CreateAnnouncement";

export default function DontCreate(props) {

  const {setModalState} = props

  return (
      <div className='dca-flex'>
        <h1 className='dont-create-text'>You don`t created announcement</h1>
        <CreateAnnouncement setModalState={setModalState}/>
      </div>
  );
}
