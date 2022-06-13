import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllClasses } from "../../js/actions/classe";
import { Spinner } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useEffect } from "react";
import Modal from "./ModalAjouteClasse";
import Acceil from "../loyout/acceil";
import Model from "./ModelsupClasse";
import ModelUp from "./ModelUpdateClasse";
import Ajouteretudiant from "./Ajouet";
import AjoutPr from "./AjoutPr";
import ListEtud from "./ListEtud";
import ListProf from "./ListProf";
const Classes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllClasses());
  }, [getAllClasses]);
  const classes = useSelector((state) => state.classeReducer.classe);
  const loadclasses = useSelector((state) => state.classeReducer.loadclasses);

  return (
    <div>
      <div>
        <div>
          <Acceil />
        </div>
        <div style={{ marginLeft: "23%", marginTop: "5%" }}>
          <Modal />
        </div>
        <div
          style={{
            marginTop: "5%",
            marginBottom: "20%",
            marginLeft: "20%",
            marginRight: "23%",
            width: "70%",
          }}
        >
          {loadclasses ? (
            <Spinner animation='border' variant='info'>
              <span className='sr-only'></span>
            </Spinner>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>nom</th>
                  <th>formation</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((classe) => (
                  <tr>
                    <td>{classe.nom}</td>
                    <td>
                      <div>{classe.formation.nom}</div>
                    </td>
                    <td>
                      <div style={{ display: "flex" ,marginRight: "150px"}}>
                        <div style={{ display: "flex" }}>
                          <div style={{ marginRight: "3%" }}>
                            <Ajouteretudiant cll={classe._id} />
                          </div>
                          <ListEtud etuds={classe.etudiant} />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            marginRight: "5%",
                            marginLeft: "5%",
                          }}
                        >
                          <div style={{ marginRight: "3%" }}>
                            <AjoutPr cll={classe._id} />
                          </div>
                          <ListProf profs={classe.proffeseur} />
                        </div>
                        <div style={{ marginRight: "5%", marginLeft: "5%" }}>
                          <ModelUp cl={classe._id} />
                        </div>
                        <Model classe={classe._id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Classes;
