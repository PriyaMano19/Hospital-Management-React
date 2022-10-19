import React, { Component } from "react";
import cover from "../assets/m_cover.jpg";
import img1 from "../assets/m_img1.webp";
import img2 from "../assets/m_img2.jpeg";
import img3 from "../assets/m_img3.jpeg";
import img4 from "../assets/m_img4.jpeg";
import img7 from "../assets/m_img7.jpg";
import img8 from "../assets/m_img8.jpg";

import "../App.css";
import axios from "axios";

class Pharmacy extends Component {
  
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <img src={cover} width="1108" height="300" />
          <br></br>
          <br></br>
          <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
              <div class="form-group has-search">
                <input type="text" class="form-control" placeholder="Search" />
              </div>
            </div>
            <div class="col-sm"></div>
          </div>

          <br></br>

          <div class="card-columns">
            <div class="card bg-light">
              <div class="card-body text-center">
                <h5 class="card-title">
                  <b>Panadol</b>
                </h5>
                <img class="card-img-top" src={img1} alt="Card image cap"></img>
                <p class="card-body">
                  Drug class: antimalarial quinolines
                  <br /> <b>Price: 50.Rs</b>
                </p>

                <button class="btn btn-outline-success ">BUY</button>
              </div>
            </div>
            <div class="card bg-light">
              <div class="card-body text-center">
                <h5 class="card-title">
                  <b>Nurofloxacin</b>
                </h5>
                <img class="card-img-top" src={img2} alt="Card image cap"></img>
                <p class="card-body">
                  Drug class: antimalarial quinolines
                  <br />
                  <b>Price: 50.Rs</b>
                </p>

                <button class="btn btn-outline-success ">BUY</button>
              </div>
            </div>
            <div class="card bg-light">
              <div class="card-body text-center">
                <h5 class="card-title">
                  <b>Manorest</b>
                </h5>
                <img class="card-img-top" src={img3} alt="Card image cap"></img>
                <p class="card-body">
                  Drug class: antimalarial quinolines
                  <br />
                  <b>Price: 50.Rs</b>
                </p>

                <button class="btn btn-outline-success ">BUY</button>
              </div>
            </div>
            <div class="card bg-light">
              <div class="card-body text-center">
                <h5 class="card-title">
                  <b>Keolax</b>
                </h5>
                <img class="card-img-top" src={img4} alt="Card image cap"></img>
                <p class="card-body">
                  Drug class: antimalarial quinolines
                  <br />
                  <b>Price: 50.Rs</b>
                </p>

                <button class="btn btn-outline-success ">BUY</button>
              </div>
            </div>
            <div class="card bg-light">
              <div class="card-body text-center">
                <h5 class="card-title">
                  <b>Amikacin</b>
                </h5>
                <img class="card-img-top" src={img7} alt="Card image cap"></img>
                <p class="card-body">
                  Drug class: antimalarial quinolines
                  <br />
                  <b>Price: 50.Rs</b>
                </p>

                <button class="btn btn-outline-success ">BUY</button>
              </div>
            </div>
            <div class="card bg-light">
              <div class="card-body text-center">
                <h5 class="card-title">
                  <b>Tolbutamide</b>
                </h5>
                <img
                  class="card-img-top"
                  src={img8}
                  alt="Card image cap"
                  height="265px"
                ></img>
                <p class="card-body">
                  Drug class: antimalarial quinolines
                  <br />
                  <b>Price: 50.Rs</b>
                </p>

                <button class="btn btn-outline-success ">BUY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Pharmacy;
