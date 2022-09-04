import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { NavLink, useParams, useHistory } from "react-router-dom";
function P_Details() {
  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Welcome Harsh Pathak</h1>

      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <div className="add_btn">
            <button className="btn btn-primary mx-2">
              <CreateIcon />
            </button>
            <button className="btn btn-danger">
              <DeleteOutlineIcon />
            </button>
          </div>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img
                src="/static/media/logo.904da08d3398460b35f7.webp"
                style={{ width: 50 }}
                alt="profile"
              />
              <h3 className="mt-3"></h3>
              <h3 className="mt-3"></h3>
              <p className="mt-3"></p>
              <p className="mt-3"></p>
            </div>
            <div className="right_view  col-lg-6 col-md-6 col-12">
              <p className="mt-5"></p>
              <p className="mt-3"></p>
              <p className="mt-3"></p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default P_Details;
