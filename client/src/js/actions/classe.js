import axios from "axios"
import {
  GET_CLASSES_LOAD,
  GET_CLASSES_SUCCESS,
  GET_CLASSES_FAILED,
  EDIT_CLASSE,
  POST_ETUDIANT,
  REMOUVE_ETUDIANT,
  POST_PROFFESEUR,
  REMOUVE_PROFESSEUR,
  GET_CLASSE
} from "../const/classe";


export const getAllClasses=()=>async (dispatch)=>{
     dispatch({type:GET_CLASSES_LOAD})
   try {
       let result=await axios.get("http://localhost:6500/classe")
       dispatch({type:GET_CLASSES_SUCCESS,payload:result.data.response})
   } catch (error) {
       dispatch({type:GET_CLASSES_FAILED,payload:error})
   }
}

export const getClasse = (id) => (dispatch) => {
  axios
    .get(`http://localhost:6500/classe/${id}`)
    .then((res) =>
      dispatch({ type: GET_CLASSE, payload: res.data.response })
    )
    .catch((err) => console.log(err));
};

export const postClasse=(user)=>async (dispatch)=>{
 
  let formData = new FormData();
  formData.append("nom", user.nom);
  formData.append("formation", user.formation);

    axios
      .post("http://localhost:6500/classe", formData)
      .then((res) => dispatch(getAllClasses()))
      .then(() => alert("classe ajouter avec succes"))
      .catch((err) => alert(err));
 
}

export const addCours = (cour) => {
  console.log(cour)
  let formData = new FormData();
  formData.append("content", cour.content);
  formData.append("user", cour.user);
  formData.append("classe", cour.classe);
  axios
    .post(`http://localhost:6500/classe/cour`, formData)
    .then((res) => {
      alert("comment ajouter avec succes");
    })
    .catch((err) => console.log(err));
};

export const editClasse = (id, classe) => (dispatch) => {
  let formData = new FormData();
  formData.append("nom", classe.nom);
  formData.append("formation", classe.formation);

  axios
    .put(`http://localhost:6500/classe/${id.id}`, formData)
    .then((res) => {
      alert("classe modifier avec succes");
      dispatch({
        type: EDIT_CLASSE,
        payload: { ...res.data.user},
      });
    })
    .catch((err) => console.log(err));
};

export const deleteClasse = (id) => async (disaptch) => {
  axios
    .delete(`http://localhost:6500/classe/${id}`)
    .then((res) => disaptch(getAllClasses()))
    .then(() => alert("classe supprimer avec succes"))
    .catch((err) => console.log(err));
};

export const postEtudiant = (cll, userId) => {
 
  return (dispatch) => {
    return axios({
      method: "patch",
      url:`http://localhost:6500/classe/postetudiant/${cll}`,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: POST_ETUDIANT, payload: { cll, userId } });
      })
      .catch((err) => console.log(err));
  };
};
export const remouveEtudiant = (cll, userId) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "patch",
        url: `http://localhost:6500/classe/remouveetudiant/${cll}`,
        data: { id: userId },
      });
      dispatch({ type: REMOUVE_ETUDIANT, payload: { cll, userId } });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const postProf = (cll, userId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url:`http://localhost:6500/classe/postproffeseur/${cll}`,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: POST_PROFFESEUR, payload: { cll, userId } });
      })
      .catch((err) => console.log(err));
  };
};
export const remouveProf = (cll, userId) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "patch",
        url: `http://localhost:6500/classe/remouveproffeseur/${cll}`,
        data: { id: userId },
      });
      dispatch({ type: REMOUVE_PROFESSEUR, payload: { cll, userId } });
    } catch (err) {
      return console.log(err);
    }
  };
};