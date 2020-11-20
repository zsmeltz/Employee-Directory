import React from "react";
//This is the set block that populates with information from our 'API' or JSON file using props from FormContainer.js, specifically the employees data array
function EmpBlocks(props) {
  return (
    <ul className="list-group" >
      {props.employees.map(employee => (
        <li className="list-group-item" key={employee} style={{backgroundColor: "#a6a6a6"}}>
          <div className="card">
            <h5 className="card-header" >{employee.name.first} {employee.name.last}</h5>
            <div className="card-body">
              <img src={employee.picture.large} alt="Oh no, there is no img!" />
              <h5 className="card-text" style={{ textAlign: 'right' }}>Email:  {employee.email}</h5>
              <h4 className="card-text" style={{ textAlign: 'right' }}>Phone #: {employee.cell}</h4>
              <h5 className="card-text" style={{ textAlign: 'right' }}>Work ID:  {employee.id.value}</h5>
            </div>
          </div>
        </li>
      ))};
    </ul>
  );
}
//export to use in FormContainer
export default EmpBlocks;