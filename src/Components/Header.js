import React from "react";

const Header = (props) => {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <>
      <nav className="navbar bg-info pt-5 pb-5 ">
        <div className="container-fluid d-flex justify-content-start">
          <h3 className="">drag drop</h3>
          <div >
            <ul className="">
              <p1 className="nav-item"></p1>
              <button
                type="button"
                className="btn btn-warning mx-4"
                onClick={handleRefresh}
              >
                New
              </button>
              <button
                type="button"
                className="btn btn-warning mx-4"
                onClick={props.onClick}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-warning mx-4"
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
