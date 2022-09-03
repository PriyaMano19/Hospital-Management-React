import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class MedicinesAdmin extends Component {
  state = {
    medicines: [],
  };

  getMedicine = () => {
    axios.get("http://localhost:8000/medicine/show").then((res) => {
      console.log(res);
      this.setState({ medicines: res.data });
    });
  };
  componentDidMount = () => {
    this.getMedicine();
  };
  render() {
    return (
      <div className="AddMedicines" >
        <div className="container">
          <br />
          <br />
          <div className="border border-secondary" >
            <div className="row">
              <div className="col-md-8 m-auto"></div>
              <div className="col-md-16 m-auto">
                <br />
                <Link to="/" className="btn btn-outline-warning">
                  Add Medicines
                </Link>
              </div>
            </div>
            <div className="col-md-10 m-auto">
              <h1 className="display-2 text-center">
                <b> All Medicines</b>
              </h1>
              <br />
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Medicine ID </th>
                    <th scope="col">Medicine Name</th>
                    <th scope="col">Strength</th>
                    <th scope="col">description</th>
                    <th scope="col">Manufacturer</th>
                    <th scope="col">Manufacture Price</th>
                    <th scope="col">Retail Price</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.medicines.map((medicines) => (
                    <tr key={medicines._id}>
                      <th>{medicines.id}</th>
                      <td>{medicines.name}</td>
                      <td>{medicines.strength}</td>
                      <td>{medicines.description}</td>
                      <td>{medicines.manufacturer}</td>
                      <td>{medicines.m_price}</td>
                      <td>{medicines.r_price}</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-warning"
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                          UPDATE
                        </button>
                       
                      </td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-danger"
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                        DELETE
                        </button>
                       
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MedicinesAdmin;
