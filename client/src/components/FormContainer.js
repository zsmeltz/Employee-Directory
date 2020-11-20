import React, { Component } from "react";
import Form from "./Form";
import EmpBlocks from "./EmployeeBlocks.js";
import { employees } from "../utils/EmployeeAPI.json";

//Here is out "mother" class FormContainer
class FormContainer extends Component {

  //These are the states setting search as a string and employees as an array for the data to be set in. 
  state = {
    search: "",
    employees: [],
  };

//This method populates the page with all employees to start with by setting the search to an empty string which by default gives you all employee data. 
  componentDidMount() {
    this.searchEmps("")
  }


  //the searchEmps function takes in the search state's input and compares it to the data in employees by a filter taking in just one object of employee data
  //then comparing it with includes, returning it, them setting the state of employees to this new compared object of data that matches your search.
  searchEmps = search => {
    const newEmployees = employees.filter(employee => {

      if (employee.name.first.includes(search) || employee.name.last.includes(search)) {
        return employees;
      };

    });

    this.setState({ employees: newEmployees });

  };



  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  //This sends the submitted input from the form to a call on searchEmps 
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmps(this.state.search);
  };

  //THis will render our Form from the Form.js file with it's given props. 
  render() {
    return (
      <div>
        <Form
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <EmpBlocks employees={this.state.employees} />
      </div>
    );
  }
}

export default FormContainer;