import React from "react";
import "./AddBooks.css";
import { useState } from "react";
import { connect } from "react-redux";
import { addBook } from "../redux/actions/actionsBooks";

const AddBooks = ({ libraryData, addBook }) => {
  console.log(libraryData);
  const initialState = {
    titre: "",
    auteur: "",
  };
  const [newData, setNewData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(newData);
    //Vidange du input
    setNewData(initialState);
  };
  const displayData =
    libraryData.length > 0 ? (
      libraryData.map((data) => {
        return (
          <>
            <li className="list-group-item list-group-item-light d-flex justify-content-between ">
              <span>
                <strong>Auteur: </strong>
                {data.auteur}
              </span>

              <span>
                <strong>Titre: </strong>
                {data.titre}
              </span>
              <span className="btn btn-danger">X</span>
            </li>
          </>
        );
      })
    ) : (
      <p className="text-center">Aucune donée disponible</p>
    );

  const deleteAllData = libraryData.length > 0 && (
    <div className="d-flex justify-content-center">
      <button className="btn btn-danger mt-4">Effacer tous les livres</button>
    </div>
  );

  return (
    <main role="main">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center ">
          <h1 className="display-4 ">@BIBLIONET</h1>
          <p>Ajouter un livre à votre bibliothéque</p>

          <form
            className="form-inline justify-content-center"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                value={newData.titre}
                className="form-control"
                placeholder="Titre"
                required
                onChange={(e) =>
                  setNewData({ ...newData, titre: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                value={newData.auteur}
                type="text"
                className="form-control ml-3"
                placeholder="Auteur"
                required
                onChange={(e) =>
                  setNewData({ ...newData, auteur: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <button className="btn btn-secondary ml-3">
                Ajouter un livre
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="container"
        style={{ minHeight: "200px", marginTop: "50px" }}
      >
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">{displayData}</ul>
            {deleteAllData}
          </div>
        </div>
      </div>
    </main>
  );
};
const addStateToProps = (state) => {
  return {
    libraryData: state.library,
  };
};
const addDispatchToProps = (dispatch) => {
  return {
    addBook: (data) => dispatch(addBook(data)),
  };
};

export default connect(addStateToProps, addDispatchToProps)(AddBooks);
