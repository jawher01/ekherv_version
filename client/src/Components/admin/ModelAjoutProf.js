import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import {postProf,remouveProf} from "../../js/actions/classe"
const ModelAjoutProf = ({ cll ,userId}) => {
 
    const classes = useSelector((state) => state.classeReducer.classe);
  const currentCll = classes.find((p) => p._id == cll.cll);

  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const like = () => {
    dispatch(postProf(cll.cll, userId.proffeseur));
    setLiked(true);
  };

  const unlike = () => {
    dispatch(remouveProf(cll.cll, userId.proffeseur));
    setLiked(false);
  };

  useEffect(() => {
    if (currentCll.etudiant.includes(userId.etudiant)) setLiked(true);
    else setLiked(false);
  }, [currentCll.proffeseur,userId.proffeseur]);
  
  return (
  
    <div className='like-container' >
    {userId.proffeseur && liked == false && (
      <Button variant='contained' onClick={like} style={{marginLeft:"77%"}}>
        ajouter
      </Button>
     
    )}
    {userId.proffeseur && liked && (
     
      <Button variant='contained' onClick={unlike} style={{marginLeft:"77%"}}>
      suuprimer
    </Button>
    )}
   
  </div>
  );
};

export default ModelAjoutProf;
