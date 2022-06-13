import React from 'react'
import List from "./NomParticipant"
import { useSelector } from "react-redux";
const ListParticipant = (eve) => {
  const user = useSelector((state) => state.userReducer.user);
  var tab=[]
  for (let i = 0; i < eve.eve.participant.length; i++) {
     tab.push(eve.eve.participant[i]);
  }
  
 const ev=eve.eve.participant
  
  return (
    <div ><List tab={tab} evet={eve.eve._id} userId={user._id} />  </div>
  )
}

export default ListParticipant