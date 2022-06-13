import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likePost, unlikePost } from "../../js/actions/publication";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const LikeButton = ({ pub ,userId}) => {
  
  const publications = useSelector(
    (state) => state.publicationReducer.publication
  );
  const currentPub = publications.find((p) => p._id == pub);
  const [liked, setLiked] = useState(false);
  const [likers, setLikers] = useState(currentPub.likers);
  const sync = () => {
    const byId = id => id === userId;
      const exist = likers.find( byId );
    const newLikers = !exist  ? [...likers,userId] : likers.filter(id=>id!=userId)
    setLikers(newLikers)
    }
  const dispatch = useDispatch();
  const like = () => {
    sync()
    dispatch(likePost(pub, userId));
    setLiked(true);
  };
  
  const unlike = () => {
    sync()
    dispatch(unlikePost(pub, userId));
    setLiked(false);
  };

  useEffect(() => {
    if (currentPub.likers.includes(userId)) setLiked(true);
    else setLiked(false);
  }, [currentPub.likers]);
  
  return (
    <div className='like-container'>
      {userId && liked == false && (
        <div style={{display:"flex"}}>
        <FavoriteBorderIcon onClick={like} alt='like'  color='error'/>
        <div  style={{marginLeft:"10%"}}> {likers.length} </div>
        </div>
      )}
      {userId && liked && (
        <div style={{display:"flex"}}>
        <FavoriteBorderIcon onClick={unlike} alt='unlike' color='primary'/>
        <div style={{marginLeft:"10%"}}> {likers.length} </div>
        </div>
      )} 
    </div>
  );
};

export default LikeButton;
