import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import {postEtudiant,remouveEtudiant} from "../../js/actions/classe"
const ModelAjoutEtud = ({ cll ,userId}) => {
 
    const classes = useSelector((state) => state.classeReducer.classe);
  const currentCll = classes.find((p) => p._id == cll.cll);

  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const like = () => {
    dispatch(postEtudiant(cll.cll, userId.etudiant));
    setLiked(true);
  };

  const unlike = () => {
    dispatch(remouveEtudiant(cll.cll, userId.etudiant));
    setLiked(false);
  };

  useEffect(() => {
    if (currentCll.etudiant.includes(userId.etudiant)) setLiked(true);
    else setLiked(false);
  }, [currentCll.etudiant,userId.etudiant]);
  
  return (
  
    <div className='like-container' >
    {userId.etudiant && liked == false && (
      <Button variant='contained' onClick={like} style={{marginLeft:"77%"}}>
        ajouter
      </Button>
     
    )}
    {userId.etudiant && liked && (
     
      <Button variant='contained' onClick={unlike} style={{marginLeft:"77%"}}>
      suuprimer
    </Button>
    )}
   
  </div>
  );
};

export default ModelAjoutEtud;
