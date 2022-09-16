import React, { Component } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import login from "../assets/n_notFound.svg";
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
        <Container className="mt-5">
          <Row>
            <Col lg={12} md={6} sm={12}>
              <h2 class="alert alert-info">Home Page Under Development</h2>
            </Col>
            <img
              class="login-img"
              src={login}
              style={{
                marginLeft: "380px",
              }}
            />
          </Row>
        </Container>
      </>
    );
  }
}
