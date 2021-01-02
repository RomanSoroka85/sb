import React, { Component } from "react";

// import s from "./user.module.css";

export default class User extends Component {
  state = {
    value: "",
  };
  componentDidMount() {
    console.log("Mount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Update");

    if (this.state.value) {
      let num = this.generateNumber();
      console.log(num);
      this.a = setTimeout(() => {
        this.setState(() => ({
          value: num,
        }));
      }, 1000);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.a);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.input.value);
    let result = this.reverseValue(e.target.elements.input.value);
    console.log(result);
    this.setState({
      value: result,
    });
  };
  reverseValue = (value) => {
    value = value.split("").reverse().join("");
    return value;
  };
  generateNumber = () => {
    const arr1 = [50, 63, 66, 67, 95, 96, 97, 99];
    let a = Math.round(Math.random() * (arr1.length - 1));

    let result = `+380${arr1[a]} ${Math.round(Math.random() * 9)}${Math.round(
      Math.random() * 9
    )}${Math.round(Math.random() * 9)}
    ${Math.round(Math.random() * 9)}${Math.round(
      Math.random() * 9
    )} ${Math.round(Math.random() * 9)}${Math.round(Math.random() * 9)}`;
    return result;
  };

  render() {
    // if (this.state.value) {
    //   let num = this.generateNumber();
    //   console.log(num);
    //   this.a = setTimeout(() => {
    //     this.setState(() => ({
    //       value: num,
    //     }));
    //   }, 1000);
    // }
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="input"></input>
          <button type="submit">Input</button>
        </form>
        <div>
          <p>{this.state.value}</p>
        </div>
      </>
    );
  }
}
