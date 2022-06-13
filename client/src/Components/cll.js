import React from 'react'

import { useSelector } from "react-redux";
import Etudiant from "./classeset1"
import Proffesseur from "./classeset"
const Cll = () => {
    const user = useSelector((state) => state.userReducer.user);
   
    if (user.role==="proffeseur") {
        return (
          <div>
            <Proffesseur />
          </div>
        );
      } else {
        return (
          <div>
            <Etudiant /> 
          </div>
        );
      }
}

export default Cll