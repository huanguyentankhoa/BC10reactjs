import React, { Component } from "react";

export default class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        manv: "",
        tennv: "",
        email: "",
      },
      errors: {
        manv: "",
        tennv: "",
        email: "",
      },
      manvValid: false,
      tennvValid: false,
      emailValid: false,
      formValid: false,
    };
  }
  handleFormValid = () => {
    const { manvValid, tennvValid, emailValid } = this.state;
    this.setState({
      formValid: manvValid && tennvValid && emailValid,
    });
  };
  handleOnchange = (e) => {
    const { name, value } = e.target;

    this.setState(
      {
        values: { ...this.state.values, [name]: value },
      },
      () => {
        console.log(this.state);
      }
    );
  };
  handleErrors = (e) => {
    const { name, value } = e.target;
    let mess = value.trim() === "" ? name + " Không được rỗng" : "";
    let { manvValid, tennvValid, emailValid } = this.state;
    switch (name) {
      case "manv":
        manvValid = mess === "" ? true : false;
        if (value && value.length <= 4) {
          mess = "Mã nhân viên từ 5 ký tự trở lên";
          manvValid = false;
        }
        break;
      case "tennv":
        tennvValid = mess === "" ? true : false;
        break;
      case "email":
        emailValid = mess === "" ? true : false;
        if (value && !value.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$")) {
          mess = "Email không hợp lệ";
          emailValid = false;
        }

        break;
      default:
        break;
    }

    this.setState(
      {
        errors: { ...this.state.errors, [name]: mess },
        manvValid,
        tennvValid,
        emailValid,
      },
      () => {
        this.handleFormValid();
      }
    );
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { manv, tennv, email } = this.props;
    const { errors } = this.state;
    return (
      <div className="container">
        <h3 className="title">*FormValidation</h3>
        <form onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label>Mã nhân viên</label>
            <input
              type="text"
              className="form-control"
              name="manv"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
              value={manv}
            />
            {errors.manv ? (
              <div className="alert alert-danger">{errors.manv}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Tên nhân viên</label>
            <input
              type="text"
              className="form-control"
              name="tennv"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
              value={tennv}
            />
            {errors.tennv ? (
              <div className="alert alert-danger">{errors.tennv}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
              value={email}
            />
            {errors.email ? (
              <div className="alert alert-danger">{errors.email}</div>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success"
            disabled={!this.state.formValid}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
