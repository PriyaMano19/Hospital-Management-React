import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { NavLink, useParams, useHistory } from "react-router-dom";
function P_Details() {
  const [getpatientdata, setPatientdata] = useState([]);
  console.log(getpatientdata);
  const { id } = useParams("");
  function GetDateOnly(date) {
    if (!date) {
      return "-";
    }
    let newDate = date.split("T");
    return newDate[0];
  }
  const getdata = async () => {
    const res = await fetch(`http://localhost:8000/admin`, {
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
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}></h1>
      {getpatientdata.map((element, id) => {
        return (
          <>
            <Card sx={{ maxWidth: 600 }} className="mt-3 ">
              <CardContent>
                <div class="grid justify-items-end ...">
                  <div className="add_btn ">
                    <NavLink to={`edit/${element._id}`}>
                      <button className="btn btn-primary mx-2">
                        <CreateIcon />
                      </button>
                    </NavLink>
                    <button className="btn btn-danger">
                      <DeleteOutlineIcon />
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="left_view col-lg-6 col-md-6 col-12">
                    <div class="flex space-x-4 mt-1 ">
                      {" "}
                      <img
                        src="/static/media/logo.904da08d3398460b35f7.webp"
                        style={{ width: 80 }}
                        alt="profile"
                        className="-mt-8"
                      />
                      {/* <p className="mt-3 font-bold text-lg -mt-2">
                    Report Date: <span>{GetDateOnly(element.rdate)}</span>
                  </p> */}
                    </div>
                    <p className="mt-3 font-bold text-lg">
                      Full Name: <span>{element.name}</span>
                    </p>
                    <p className="mt-3 font-bold text-lg">
                      Age: <span>{element.age}</span>
                    </p>
                    <p className="mt-3 font-bold text-lg">
                      Address: <span>{element.address}</span>
                    </p>
                  </div>

                  <div className="right_view  col-lg-6 col-md-6 col-12  mt-5 ">
                    {/* <p className="mt-3 font-bold text-lg">
                Appointment Date:{" "}
                <span>{GetDateOnly(getpatientdata.date)}</span>
              </p> */}
                    <p className="mt-3 font-bold text-lg">
                      Appointment Date: <span>{GetDateOnly(element.date)}</span>
                    </p>
                    <p className="mt-3 font-bold text-lg">
                      Gender: <span>{element.gender}</span>
                    </p>
                    <p className="mt-3 font-bold text-lg">
                      Phone Number: <span>{element.mobile}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        );
      })}
    </div>
  );
}

export default P_Details;
