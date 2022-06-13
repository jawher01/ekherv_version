import {
  GET_CLASSES_LOAD,
  GET_CLASSES_SUCCESS,
  GET_CLASSES_FAILED,
  EDIT_CLASSE,
  DELETE_CLASSE,
  POST_ETUDIANT,
  REMOUVE_ETUDIANT,
  POST_PROFFESEUR,
  REMOUVE_PROFESSEUR,
  GET_CLASSE
} from "../const/classe";

const initialeState = {
  classe: [],
  loadclasses: false,
  errors: null,
  user: [],
  editclasse: "",
};

export const classeReducer = (state = initialeState, { type, payload }) => {
  switch (type) {
    case GET_CLASSES_LOAD:
      return { ...state, loadclasses: true };
    case GET_CLASSES_SUCCESS:
      return { ...state, classe: payload, loadclasses: false };
    case GET_CLASSES_FAILED:
      return { ...state, loadclasses: false, errors: payload };
    case DELETE_CLASSE:
      return { ...state, user: payload };
    case EDIT_CLASSE:
      return { ...state, loadclasses: false, classe: payload };
      case GET_CLASSE:
        return { ...state, user: payload };
    case POST_ETUDIANT:
      return state.map((cll) => {
        if (cll._id === payload.cllId) {
          return {
            ...cll,
            etudiant: [payload.userId, ...cll.etudiant],
          };
        }
        return cll;
      });
    case REMOUVE_ETUDIANT:
      return state.map((cll) => {
        if (cll._id === payload.cllId) {
          return {
            ...cll,
            etudiant: cll.etudiant.filter((id) => id !== payload.userId),
          };
        }
        return cll;
      });

      case POST_PROFFESEUR:
        return state.map((cll) => {
          if (cll._id === payload.cllId) {
            return {
              ...cll,
              proffeseur: [payload.userId, ...cll.proffeseur],
            };
          }
          return cll;
        });
      case REMOUVE_PROFESSEUR:
        return state.map((cll) => {
          if (cll._id === payload.cllId) {
            return {
              ...cll,
              proffeseur: cll.proffeseur.filter((id) => id !== payload.userId),
            };
          }
          return cll;
        });

    default:
      return state;
  }

  
};
