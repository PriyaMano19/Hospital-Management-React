import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { adddata, updatedata, deldata } from "./context/ContextProvider";
function P_ViewAllAppointments() {
  const { udata, setUdata } = useContext(adddata);
  const { updata, setUPdata } = useContext(updatedata);

  const { dltdata, setDLTdata } = useContext(deldata);
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

  const deletepatient = async (id) => {
    const res2 = await fetch(`http://localhost:8000/deletepatient/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      console.log("error");
    } else {
      console.log("user deleted");

      getdata();
    }
  };

  return (
    <>
      {udata ? (
        <>
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>{udata.name}</strong> added succesfully!
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}
      {updata ? (
        <>
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>{updata.name}</strong> updated succesfully!
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}

      {dltdata ? (
        <>
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>{dltdata.name}</strong> deleted succesfully!
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}

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
                        <button
                          className="btn btn-danger"
                          onClick={() => deletepatient(element._id)}
                        >
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
    </>
  );
}

export default P_ViewAllAppointments;
