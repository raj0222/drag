import React from "react";

const Header = (props) => {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-info pt-5 pb-5 ">
        <div className="container-fluid">
          <h3 className="text-center">drag drop</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"></li>
              <button
                type="button"
                className="btn btn-warning mx-2"
                onClick={handleRefresh}
              >
                New
              </button>
              <button
                type="button"
                className="btn btn-warning mx-2"
                onClick={props.onClick}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-warning mx-2"
                onClick={props.getcode}
              >
                Save form data
              </button>
              <button
                className="btn btn-warning"
                type="button"
                onClick={props.button}
              >
                downlaod
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
