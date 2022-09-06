import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
function P_ViewAllAppointments() {
  const [getpatientdata, setPatientdata] = useState([]);
  console.log(getpatientdata);

  function GetDateOnly(date) {
    if (!date) {
      return "-";
    }
    let newDate = date.split("T");
    return newDate[0];
  }
  const getdata = async () => {
    const res = await fetch("http://localhost:8000/admin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setPatientdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="mt-5">
      <div className="container">
        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">#ID</th>
              <th scope="col">Full Name</th>
              <th scope="col">Age</th>
              <th scope="col">Address</th>
              <th scope="col">MobileNumber</th>
              <th scope="col">Date</th>
              <th scope="col">Report Date</th>
              <th scope="col">Cancel</th>
            </tr>
          </thead>
          <tbody>
            {getpatientdata.map((element, id) => {
              return (
                <>
                  <tr>
                    <th scope="row">{id + 1}</th>
                    <td>{element.name}</td>
                    <td>{element.age}</td>
                    <td>{element.address}</td>
                    <td>{element.mobile}</td>
                    <td>{GetDateOnly(element.date)}</td>
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
                      <NavLink to={`view/${element._id}`}>
                        <button className="btn btn-success">
                          <RemoveRedEyeIcon />
                        </button>
                      </NavLink>
                      <NavLink to={`edit/${element._id}`}>
                        <button className="btn btn-primary">
                          <CreateIcon />
                        </button>
                      </NavLink>
                      <button className="btn btn-danger">
                        <DeleteOutlineIcon />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default P_ViewAllAppointments;
