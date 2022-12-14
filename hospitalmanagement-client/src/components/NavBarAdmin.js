import React from "react";
import logo from "../assets/logo.webp";

function NavBarAdmin() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img
          class="card-img-top"
          src={logo}
          style={{ height: "50px", width: "50px" }}
        />
           <span className="text-info text-uppercase"><h2>&nbsp;ZONE</h2></span>
           
           <div className="container-fluid">
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="container">

        
                
            
            <ul className="navbar-nav me-auto mb-6 mb-lg-0">
              <li class="nav-item">
                
                <a class="nav-link active" aria-current="page" href="/dashboad">
                  Users
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/add">
                  Appointment
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Lab Test
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/workshop">
                  Medicines
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/date">
                 Health Programs
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/about">
                 Login
                </a>
              </li>
              
            </ul>
            </div>
            <form className="d-flex" style={{ marginLeft: "260px" ,}}>
              <button className="btn btn-info tab" type="submit">
                <a className="text-decoration-none text-dark " href="/Login" >
                  Login
                </a>
                <i className="bi bi-box-arrow-in-right"></i>
              </button>
              &nbsp;&nbsp; 
              <button className="btn btn-outline-info " type="submit">
                <a className="text-decoration-none text-white" href="/add">
                  Registration
                </a>
                <i className="bi bi-save2"></i>
              </button>
              &nbsp;&nbsp; 
            </form>
          </div>
        </div>
       
      </nav>
    </div>
  );
}

export default NavBarAdmin;
