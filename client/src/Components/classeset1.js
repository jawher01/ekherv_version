import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllClasses } from "../js/actions/classe";
import { Table } from "react-bootstrap";

import Model from "./admin/ModelListCours";
import Acceil from "./loyout/acceil";
const Classeset = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllClasses());
  }, [getAllClasses]);
  const classes = useSelector((state) => state.classeReducer.classe);
  const user = useSelector((state) => state.userReducer.user);

  let forms = [];
  for (let i = 0; i < classes.length; i++) {
    if (classes[i].etudiant.includes(user._id)) {
      forms.push(classes[i]);
    }
  }

  

  return (
    <div>
      <div>
        <Acceil />
      </div>
      <div style={{ marginLeft: "20%", marginTop: "5%" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>nom</th>
              <th>formation</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {forms.map((form) => (
              <tr>
                <td>{form.nom}</td>
                <td>
                  <div>{form.formation.nom}</div>
                </td>
                <td>
                  <div>
                    <Model form={form} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Classeset;
