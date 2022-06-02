import React from "react";

const Header = (props) => {

 const handleRefresh=()=>{
  window.location.reload();
 }
  
  return (
    <>
      <div className="container mt-5">
        <div className="card w-100">
          <div className="card-body">
            <h5 className="card-title">Drag Drop</h5>
            <p className="card-text float-start">
            <button type="button" className="btn btn-secondary mx-2" onClick={handleRefresh}>New</button>
            <button type="button" className="btn btn-secondary mx-2" onClick={props.onClick}>Save</button>
            <button type="button" className="btn btn-secondary mx-2" onClick={props.getcode}>Save form data</button>
            <button className="btn btn-warning"  type='button' onClick={props.button}>downlaod</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
