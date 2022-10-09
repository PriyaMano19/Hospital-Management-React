import React, { Component } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import login from "../assets/n_notFound.svg";
import dash from "../assets/n_dash.jpg";
export default class n_home extends Component {
  state = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
  };

  handleChange = (event) => {
    const isCheckbox = event.target.type == "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let emailError = "";
    let passwordError = "";
    if (!this.state.email.includes("1")) {
      emailError = "Invalid Email or Password";
    }

    if (!this.state.password.includes("1")) {
      passwordError = "invalid Password";
    }

    if (emailError) {
      this.setState({ emailError });
      return false;
    }

    if (passwordError) {
      this.setState({ passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const navigate = useNavigate;
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //rediect to home
      navigate("/register");
    }
    console.log(this.state);
  };
  render() {
    return (
      <>
        <div
          style={{
            marginTop: "25px",
          }}
        >
          <h2> Admin Dashboad</h2>
        </div>
        <Container className="mt-5">
          <Row>
            <Col lg={7} md={12} sm={12}>
              <img class="d-block w-100" src={dash} alt="First slide"></img>
            </Col>
            <Col lg={3} md={12} sm={12}>
              <button
                className="btn btn-info tab"
                type="submit"
                style={{
                  color: "black",
                  fontSize: "40px",
                  marginTop: "25px",
                  width: "500px",
                }}
              >
                <a className="text-decoration-none text-dark " href="/patients">
                  Manage Patients
                </a>
                <i className="bi bi-box-arrow-in-right"></i>
              </button>
              <button
                className="btn btn-info tab"
                type="submit"
                style={{
                  color: "black",
                  fontSize: "40px",
                  marginTop: "25px",
                  width: "500px",
                }}
              >
                <a className="text-decoration-none text-dark " href="/programs">
                  Manage Programs
                </a>
                <i className="bi bi-box-arrow-in-right"></i>
              </button>
              <button
                className="btn btn-info tab"
                type="submit"
                style={{
                  color: "black",
                  fontSize: "40px",
                  marginTop: "25px",
                  width: "500px",
                }}
              >
                <a className="text-decoration-none text-dark " href="/programs">
                  Manage Doctors
                </a>
                <i className="bi bi-box-arrow-in-right"></i>
              </button>
              <button
                className="btn btn-info tab"
                type="submit"
                style={{
                  color: "black",
                  fontSize: "40px",
                  marginTop: "25px",
                  width: "500px",
                }}
              >
                <a className="text-decoration-none text-dark " href="/programs">
                  Manage Rooms
                </a>
                <i className="bi bi-box-arrow-in-right"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
