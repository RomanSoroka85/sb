import React, { Component } from "react";
import data from "../db/contacts";
console.log(data);

class Filter extends Component {
  state = {
    innerData: data,
    option: "",
  };
  validData = () => {
    function validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    const filteredData = this.state.innerData.filter((service) => {
      let result = validateEmail(service);

      if (result) return service;
    });
    console.log(filteredData);
    return filteredData;
  };

  getOptionValue = (e) => {
    console.log(e);
    console.log(e.target.value);
    this.setState({
      option: e.target.value,
    });
  };

  onHandleChangeFilter = () => {
    const valid = this.validData();
    const result = valid.filter((email) => email.includes(this.state.option));
    console.log(result);
    return result;
  };
  render() {
    const a = "ukr.net";
    const x = this.onHandleChangeFilter(a);
    console.log(x);

    return (
      <>
        <h3> Обрати поштовий сервіс</h3>
        <select  onChange={this.getOptionValue}>
          <option>all</option>
          <option>yandex.ru</option>
          <option>mail.ru</option>
          <option>gmail.com</option>
          <option>ukr.net</option>
          <option>rambler.ru</option>
        </select>
        <div>
          <ul>
            {x.map((el) => (
              <li>{el}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Filter;
