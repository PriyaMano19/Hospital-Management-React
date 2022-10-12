import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";

const Navbar = () => {
	return (
		
        <div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		<img
          class="card-img-top"
          src={logo}
          style={{ height: "50px", width: "50px" }}
        />
			<div className="container">
					
				<NavLink className="navbar-brand" hrefLang="https://henok.us" to="/">
					ZONE
				</NavLink>
				<button
					className="navbar-toggler collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#mobileMenu"
					aria-controls="mobileMenu"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="toggler-icon top-bar"></span>
					<span className="toggler-icon middle-bar"></span>
					<span className="toggler-icon bottom-bar"></span>
				</button>
				<div className="collapse navbar-collapse" id="mobileMenu">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds/new"
							>
							  Book Appointment
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds"
							>
								Book Lab Test
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds/grid-view"
							>
							 Buy Medicines
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds/list-view"
							>
						      Health Programs
							</NavLink>
							</li>
							<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds/list-view"
							>
						 About Us
							</NavLink>
						</li>
						</ul>
						
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
};

export default Navbar;
