import { useState , React} from 'react';
import notLiked from '../notLiked.png';
import likedPic from '../liked.png';
import { doc, getDocs, collection, updateDoc} from "@firebase/firestore"
import { firestore } from "../firebase"

export const Posts = (props) =>{
  
  const [likes, setLikes] = useState(props.likes);
  const [likeImg, setLikeImg] = useState(notLiked);
  const [liked, setLiked] = useState(false);
  const [unliked, setUnliked] = useState(false);
  props.func(likes, liked);
  const UpdateLikes = async ()=>{
    if(liked == false){
      await updateDoc(doc(firestore, "posts", props.id), {
        likes: props.likes + 1
        });
      setLikes(likes + 1);
      setLiked(true);
      setUnliked(false);
      setLikeImg(likedPic);
    }
    else if(unliked === false && liked === true){
      await updateDoc(doc(firestore, "posts", props.id), {
        likes: props.likes - 1
        });
      setLikes(likes - 1);
      setUnliked(true);
      setLiked(false);
      setLikeImg(notLiked);
     
    }
    
  }

  console.log("props",props);
  return(
      <div className = "post">
        <p className = "post-title">{props.title}</p>
        <p className = "post-description">{props.description}</p>
        <p className = "post-likes"> 
          <img src={likeImg}  onClick = {UpdateLikes} alt="like" className = "like" />
            {likes}</p>
      </div>
  );
}