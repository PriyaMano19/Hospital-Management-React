import React, { Component } from "react";
import axios from "axios";

export default class n_Patients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.retriveUsers();
  }

  retriveUsers() {
    axios.get("http://localhost:8000/users").then((res) => {
      if (res.data.success) {
        this.setState({
          users: res.data.existingUsers,
        });

        console.log(this.state.users);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:8000/user/delete/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.retriveUsers();
    });
  };

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/users").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingUsers, searchKey);
      }
    });
  };

  filterData(users, searchKey) {
    const result = users.filter((user) => user.userName.includes(searchKey));

    this.setState({ users: result });
  }

  render() {
    return (
      <div className="container">
        <p>All Patients</p>
        <div className="col-lg-9 mt-2 mb-2">
          <input
            className="form-control"
            type="search"
            placeholder="search"
            name="searchbar"
            onChange={this.handleSearchArea}
          ></input>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Password</th>
              <th scope="col">Dob</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((users, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/patient/${users._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {users.userName}
                  </a>
                </td>
                <td>{users.email}</td>
                <td>{users.phone}</td>
                <td>{users.password}</td>
                <td>{users.dob}</td>
                <td>{users.status}</td>
                <td>
                  <a
                    className="btn btn-warning"
                    href={`/editPatient/${users._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(users._id)}
                  >
                    <i className="fas fa-trash"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
