import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { actSubmit } from "../redux/actions";
class Modal extends Component {
  constructor(props) {
    super(props);
    this.close = createRef();
    this.state = {
      id: "",
      username: "",
      fullname: "",
      email: "",
      phoneNumber: "",
      type: "USER",
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.userEdit) {
      this.setState({
        id: nextProps.userEdit.id,
        username: nextProps.userEdit.username,
        fullname: nextProps.userEdit.fullname,
        email: nextProps.userEdit.email,
        phoneNumber: nextProps.userEdit.phoneNumber,
        type: nextProps.userEdit.type,
      });
    } else {
      this.setState({
        id: "",
        username: "",
        fullname: "",
        email: "",
        phoneNumber: "",
        type: "USER",
      });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.close.current.click();
  };
  handleOnchange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, fullname, email, phoneNumber, type } = this.state;

    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {this.props.userEdit ? "EDIT USER" : "ADD USER"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                ref={this.close}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={this.handleOnchange}
                    value={username}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullname"
                    onChange={this.handleOnchange}
                    value={fullname}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    onChange={this.handleOnchange}
                    className="form-control"
                    value={email}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    onChange={this.handleOnchange}
                    className="form-control"
                    value={phoneNumber}
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select
                    name="type"
                    onChange={this.handleOnchange}
                    className="form-control"
                    value={type}
                  >
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userEdit: state.userReducer.userEdit,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (user) => {
      dispatch(actSubmit(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
