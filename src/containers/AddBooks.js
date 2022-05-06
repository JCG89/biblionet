import React from "react";
import "./AddBooks.css";

const AddBooks = () => {
  return (
    <main role="main">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center ">
          <h1 className="display-4 ">@BIBLIONET</h1>
          <p>Ajouter un livre à votre bibliothéque</p>

          <form className="form-inline justify-content-center">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Titre"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control ml-3"
                placeholder="Auteur"
                required
              />
            </div>
            <div className="form-group">
              <button className="btn btn-outline-secondary ml-3">
                Ajouter un livre
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
export default AddBooks;
