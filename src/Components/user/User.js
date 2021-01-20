import React, { Component } from "react";

// import s from "./user.module.css";

export default class User extends Component {
  state = {
    value: "",
  };
  componentDidMount() {
    console.log("Mount");
  }
  componentDidUpdate() {
    console.log("Update");

    if (this.state.value) {
      let num = this.generateNumber();
      console.log(num);
      this.a = setTimeout(() => {
        this.setState(() => ({
          value: num,
        }));
      }, 20000);
      setTimeout(() => {
        clearInterval(this.a);
        this.setState();
      }, 20000);
    }
    // const name = "my name";
    // let value = "John Smith"
    // // documentCookie = "name=значение; expires=дата; path=путь  domain=домен; secure"
    // documentСookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
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
      // setCookie = () => {
      //     document.cookie = "info = 123";
      //   };
        // getCookie = () => {
        //     alert(document.cookie);
        //   };
          // setCookie(name, value, options) {
          //   options = options || {};
          //   var expires = options.expires;
          //   if (typeof expires == "number" && expires) {
          //     var d = new Date();
          //     d.setTime(d.getTime() + expires * 1000);
          //     expires = options.expires = d;
          //   }
          //   if (expires && expires.toUTCString) {
          //     options.expires = expires.toUTCString();
          //   }
          //   value = encodeURIComponent(value);
          //   var updatedCookie = name + "=" + value;
          //   for (var propName in options) {
          //     updatedCookie += "; " + propName;
          //     var propValue = options[propName];
          //     if (propValue !== true) {
          //       updatedCookie += "=" + propValue;
          //     }
          //   }
          //   document.cookie = updatedCookie;
          // }
          //  setCookie( name, value, expires, path, domain, secure ) {
          //   document.cookie = name + "=" + escape(value) +
          //     ((expires)  ?  "; expires=" + expires.toGMTString():   "") +
          //     ((path)  ?  "; path=" + path   :   "")   +
          //     ((domain)  ?  "; domain="   +  domain :   "")   +
          //     ((secure)  ?  ";   secure"  :   "");
          // }
          // getCookie(cname)
          // {
          // var name = cname + "=";
          // var ca = document.cookie.split(';');
          // for(var i=0; i<ca.length; i++)
          //   {
          //   var c = ca[i].trim();
          //   if (c.indexOf(name)==0) return c.substring(name.length,c.length);
          //   }
          // return "";
          // }
          // getCookie(test){
          //   console.log(test);
          // }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="input"></input>
          <button type="submit">Input</button>
        </form>
        <div>
          <p>{this.state.value}</p>
        </div>
        {/* <div>
          <input type="button" value="set cookie" onClick={this.setCookie} />
          <input type="button" value="get cookie" onClick={this.getCookie} />
        </div> */}
      </>
    );
  }
}
