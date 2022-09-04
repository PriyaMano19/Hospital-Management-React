import React, { Component } from "react";
import axios from "axios";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import logo from "../assets/logo.webp";
import register from "../assets/register.svg";
import "./n_login/n_Login.css";
export default class n_CreatePatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      phone: "",
      password: "",
      dob: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { userName, email, phone, password, dob } = this.state;

    const data = {
      userName: userName,
      email: email,
      phone: phone,
      password: password,
      dob: dob,
    };

    console.log(data);

    axios.post("http://localhost:8000/user/save", data).then((res) => {
      if (res.data.success) {
        this.setState({
          userName: "",
          email: "",
          phone: "",
          password: "",
          dob: "",
        });
        alert("Registered Successfully");
      }
    });
  };

  render() {
    return (
      <>
        <Container className="mt-5">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <form class="text-left">
                <img class="icon-img-R" src={logo} />
                <label for="Register" className="title font-weight-bold">
                  Register
                </label>
                <div class="form-group">
                  <label for="patient name">Patient Name</label>
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    class="form-control"
                    placeholder="Enter Name"
                    value={this.state.userName}
                    onChange={this.handleInputChange}
                  ></input>
                </div>
                <div class="form-group">
                  <label for="emil">Email address</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    class="form-control"
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  ></input>
                </div>
                <div class="row">
                  <div class="form-group col-md-6 mb-3">
                    <label for="phone">Phone Number</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      class="form-control"
                      placeholder="Enter Phone Number"
                      value={this.state.phone}
                      onChange={this.handleInputChange}
                    ></input>
                  </div>
                  <div class="form-group col-md-6 mb-3">
                    <label for="phone">Date of Birth</label>
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      class="form-control"
                      placeholder="Enter DoB"
                      value={this.state.dob}
                      onChange={this.handleInputChange}
                    ></input>
                  </div>
                </div>
                <div class="form-group">
                  <label for="phone">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="form-control"
                    placeholder="Enter Password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  ></input>
                </div>

                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  ></input>
                  <label class="form-check-label at-3" for="exampleCheck1">
                    Accept term & conditions
                  </label>
                </div>
                <button
                  type="submit"
                  class="btn btn-success text-center btn-block"
                  onClick={this.onSubmit}
                >
                  Register
                </button>
              </form>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <img class="login-img" src={register} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
