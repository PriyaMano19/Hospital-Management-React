import React from "react";
import { NavLink } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
function P_ViewAllAppointments() {
  return (
    <div className="mt-5">
      <div className="container">
        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">#ID</th>
              <th scope="col">Age</th>
              <th scope="col">Address</th>
              <th scope="col">Date</th>
              <th scope="col">MobileNumber</th>
              <th scope="col">Report Date</th>
              <th scope="col">Cancel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              {/* <td>
                <button className="btn btn-primary">
                  <i class="fas fa-calendar"></i>
                </button>
              </td>
              <td>
                {" "}
                <button className="btn btn-danger">
                  <i class="fas fa-ban"></i>
                </button>
              </td> */}
              <td className="d-flex justify-content-between">
                <button className="btn btn-success">
                  <RemoveRedEyeIcon />
                </button>

                <button className="btn btn-primary">
                  <CreateIcon />
                </button>

                <button className="btn btn-danger">
                  <DeleteOutlineIcon />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default P_ViewAllAppointments;
