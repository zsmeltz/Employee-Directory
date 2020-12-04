import React from "react";

//This is the search form utilizing BootStrap. This gets props sent in from it's parent FormContainer
//The props here are handleInputChange, handleFormSubmit, and the search state giving it a value
function Form(props) {
  return (
    <form>
      <div className="form-group" style={{margin: 15}}>
        <h3 style={{textAlign: 'left'}}>Employee Search</h3>
        <br/>
        <label htmlFor="search">Employee:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Employees"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          GO
        </button>
      </div>
    </form>
  );
}

export default Form;