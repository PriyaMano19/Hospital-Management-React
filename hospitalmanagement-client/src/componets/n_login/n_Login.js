import React, { Component } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import logo from "../../assets/logo.webp";
import login from "../../assets/login.svg";
import "./n_Login.css";
export default class n_Login extends Component {
  render() {
    return (
      <>
        <Container className="mt-5">
          <Row>
            <Col lg={4} md={6} sm={12}>
              <Form class="text-left">
                <img class="icon-img" src={logo} />
                <label for="Login" className="login-title font-weight-bold">
                  Login
                </label>
                <Form.Group
                  className="mb-3 text-left"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group
                  className="mb-3 text-left"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary btn-block" type="submit">
                  Submit
                </Button>

                <div className="text-left at-3">
                  <a href="/dashboad">
                    <small className="account">Already have an account</small>
                  </a>
                </div>
              </Form>
            </Col>
            <Col lg={8} md={6} sm={12}>
              <img class="login-img" src={login} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
