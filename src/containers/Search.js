import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooksInApi } from "../redux/actions/actionFetchBooks";

const Search = () => {
  const [title, setTitle] = useState("");

  const state = useSelector((state) => state.search);
  const dispatch = useDispatch();
  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(bookTitle);
    dispatch(fetchBooksInApi(title));
  };
  const displayData = state.isLoading ? (
    <div className="d-flex justify-content-center"></div>
  ) : state.error ? (
    <p>{state.error}</p>
  ) : (
    <div className="car mb">
      <div className="card-header"></div>
      <div className="collapse" data-parent="accordion">
        <div className="card-body">
          {/*
          Image
          titre
          auteur
          Description
          Btn Plus d'infos
          Btn enregistrer
         */}
        </div>
      </div>
    </div>
  );
  return (
    <main role="main">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center ">
          <h1 className="display-4 ">@BIBLIONET</h1>
          <p></p>

          <form
            onSubmit={handleSubmit}
            className="form-inline justify-content-center"
          >
            <div className="form-group">
              <input
                type="text"
                value={title}
                className="form-control"
                placeholder="Rechercher"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <button className="btn btn-secondary ml-3">Valider</button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="container"
        style={{ minHeight: "200px", marginTop: "50px" }}
      >
        <div className="accordion">{displayData}</div>
      </div>
    </main>
  );
};
export default Search;
