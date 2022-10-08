import React, { Component } from "react";
import axios from "axios";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import logo from "../assets/logo.webp";
import register from "../assets/n_register.svg";
import "./n_login/n_Login.css";
export default class n_CreateProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      ageGroup: "",
      gender: "",
      sample: "",
      desc: "",
      price: "",
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

    const { title, ageGroup, gender, sample, desc, price } = this.state;

    const data = {
      title: title,
      ageGroup: ageGroup,
      gender: gender,
      sample: sample,
      desc: desc,
      price: price,
    };

    console.log(data);

    axios.post("http://localhost:8000/program/save", data).then((res) => {
      if (res.data.success) {
        this.setState({
          title: "",
          ageGroup: "",
          gender: "",
          sample: "",
          desc: "",
          price: "",
        });
        alert("Registered Successfully");
      } else {
        alert("Registration Failed!!!");
      }
    });
  };

  render() {
    return (
      <>
        <Container className="mt-12">
          <form class="text-left was-validated">
            <img class="icon-img-R" src={logo} />
            <label for="Register" className="title font-weight-bold">
              Medical Program
            </label>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <div class="form-group">
                  <label for="patient name">Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    class="form-control"
                    placeholder="Enter title"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    pattern=".{8,}"
                    title="Eight or more characters"
                    required
                  />
                  <div class="invalid-feedback font-weight-bold">
                    Invalid Input.
                  </div>
                  <div class="valid-feedback font-weight-bold">Looks good!</div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    id="ageGroup"
                    name="ageGroup"
                    class="form-control"
                    placeholder="Enter ageGroup"
                    value={this.state.ageGroup}
                    onChange={this.handleInputChange}
                    pattern=".{8,}"
                    required
                  />

                  <div class="invalid-feedback font-weight-bold">
                    Invalid Input.
                  </div>
                  <div class="valid-feedback font-weight-bold">Looks good!</div>
                </div>
                <div class="row">
                  <div class="form-group col-md-6 mb-3">
                    <label for="phone">gender</label>
                    {/* <input
                      type="text"
                      id="gender"
                      name="gender"
                      class="form-control"
                      placeholder="Enter gender"
                      value={this.state.gender}
                      onChange={this.handleInputChange}
                      pattern=".{8,}"
                      title="Eight or more characters"
                      required
                    /> */}
                    <select
                      class="form-control"
                      id="gender"
                      name="gender"
                      value={this.state.gender}
                      onChange={this.handleInputChange}
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                    <div class="invalid-feedback font-weight-bold">
                      Invalid Input.
                    </div>
                    <div class="valid-feedback font-weight-bold">
                      Looks good!
                    </div>
                  </div>
                  <div class="form-group col-md-6 mb-3">
                    <label for="phone">sample</label>
                    <input
                      type="text"
                      id="sample"
                      name="sample"
                      class="form-control"
                      placeholder="Enter sample"
                      value={this.state.sample}
                      onChange={this.handleInputChange}
                      required
                    />
                    <div class="invalid-feedback font-weight-bold">
                      Invalid Input.
                    </div>
                    <div class="valid-feedback font-weight-bold">
                      Looks good!
                    </div>
                    <div class="valid-feedback font-weight-bold">
                      Looks good!
                    </div>
                  </div>
                </div>
                {/* 
                <button
                  type="submit"
                  class="btn btn-success text-center btn-block"
                  onClick={this.onSubmit}
                >
                  Submit
                </button> */}
              </Col>

              <Col lg={6} md={6} sm={12}>
                <div class="form-group">
                  <label for="phone">desc</label>
                  <textarea
                    type="text"
                    id="desc"
                    name="desc"
                    rows="4"
                    class="form-control"
                    placeholder="Enter desc"
                    value={this.state.desc}
                    onChange={this.handleInputChange}
                    required
                    pattern=".{8,}"
                    title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                  />{" "}
                  <div class="invalid-feedback font-weight-bold">
                    Invalid Input.
                  </div>
                </div>

                <div class="form-group">
                  <label for="phone">price</label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    class="form-control"
                    placeholder="Enter price"
                    value={this.state.price}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div class="invalid-feedback font-weight-bold">
                    Invalid Input.
                  </div>
                  <div class="valid-feedback font-weight-bold">Looks good!</div>
                  <div class="valid-feedback font-weight-bold">Looks good!</div>
                </div>

                <button
                  type="submit"
                  class="btn btn-success text-center btn-block"
                  onClick={this.onSubmit}
                >
                  Submit
                </button>
              </Col>
            </Row>
          </form>
        </Container>
      </>
    );
  }
}
