import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./dataUser.json";
export default class UserManagerment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: data,
      keyword: "",
      userEdit: null,
    };
  }
  handleEdit = (user) => {
    this.setState({
      userEdit: user,
    });
  };

  //add and update
  handleSubmit = (user) => {
    let userList = [...this.state.userList];
    if (user.id) {
      let index = this._findIndex(user.id);
      if (index !== -1) {
        userList[index] = user;
      }
      this.setState({
        userList,
      });
    } else {
      const userClone = { ...user, id: new Date().getTime() };
      userList = [...this.state.userList, userClone];
    }

    this.setState({
      userList,
    });
    console.log(this.state);
  };
  _findIndex = (idUser) => {
    return this.state.userList.findIndex((user) => {
      return user.id === idUser;
    });
  };
  handleDelete = (user) => {
    let userList = [...this.state.userList];
    const index = this._findIndex(user.id);
    if (index !== -1) {
      userList.splice(index, 1);
      this.setState({
        userList,
      });
    }
  };
  handleGetKeyword = (keyword) => {
    console.log(keyword);
    this.setState({
      keyword,
    });
  };

  render() {
    let { userList, keyword, userEdit } = this.state;
    //filter user
    userList = this.state.userList.filter((user) => {
      return user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search getKeyword={this.handleGetKeyword} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.setState({
                userEdit: null,
              });
            }}
          >
            Add User
          </button>
        </div>
        <Users
          userList={userList}
          getUserDelete={this.handleDelete}
          getUserEdit={this.handleEdit}
        />
        <Modal onSubmit={this.handleSubmit} userEdit={userEdit} />
      </div>
    );
  }
}
