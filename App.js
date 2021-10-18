// import React,{useState} from "react";

// const App = () => {

import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      lastNAme: "",  
      errorVirtual: "",
      
      email: "",
      
      password: "",
      confirmPAssword: "",
      passwordErr:'',

      age: "",
      erroAge: "",
    };
  }
  // stop reefresh
  handleSubmit = (e) => {
    e.preventDefault(); //وقف رفرش الصفحة
    alert("you are submit :" + this.state.userName);
  };
  // for welome message
  handleForm = (e) => {
    // always u have to add e.target.value  //change state
    this.setState({ userName: e.target.value }); //empty input=input wwith enter value //to take enter value from input and save it in daat form
  };
  // change state to get enter vlues from inputs
  handleChange = (event) => {
    // هذي تفد لمن اخذ الداتا من الفورم بس متفيدني لمن اسوي
    // validation

    this.setState({
      [event.target.name]: event.target.value, //لمن كتلنة هذي صارت مالت الاسم الاخير last name
    });

    // لازم نستبدلة ب الاتي
    // let nam = event.target.name; //1
    // let val = event.target.value;
    // let error = ""; //never forget that
    // // errorrs

    // // اذا كانت
    // // <input type="text" name="lastName" ===nam //to insure is this equll in spelling  or not //first condition
    // if (nam === "lastNAme") {
    //   // second condition if the entire value from input type text and name=lastName = number or not equal "emapty"
    //   if (val !== Number(val)) {
    //     //  so run this error
    //     error = <p>last name must not contain a number or *?@# </p>;
    //   }
    //   this.setState({
    //     errorVirtual: error,
    //     nam: val,
    //   });
    // }
  };

  handleChange1 = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    let error = "";

    if (nam === "age") {
      if (val !== "" && !Number(val)) {
        error = <p>age is must number</p>;
      }
    }
    this.setState({
      erroAge: error,
      nam: val,
    });
  };


  handleChange3=()=>{
let pass=this.state.password
let passCon=this.state.confirmPAssword;
let passErro=''
if (pass!== passCon) {
  passErro = <p> password is not matches </p>;
}
this.setState({
passwordErr:passErro
})
}

  render() {
    // welcome message

    // اضافة مثل رسالة ترحيبية فوك الفورم حلوة  الفكرة
    // بال onchange {handlechange} عدا اليوسر نايم لازم وحدة ليش والله مدري
    let header = "";
    if (this.state.userName) {
      header = (
        <h1>
          Hello dearly , {this.state.userName} {this.state.lastNAme}
        </h1>
      );
    } else {
      header = "";
    }

    // style
    const styles = {
      display: "flex",
      flexFlow: "column",
      border: "2px solid gray",
      padding: "20px",
      marginTop: "120px",
      backgroundColor: "#eee",
      color: "black",
    };

    return (
      <>
        <div className="container">
          <div className="row">
            {/* <h1> hello worls</h1> */}
            <form style={styles} onSubmit={this.handleSubmit}>
              {header}

              <label htmlFor="userNAme">user name</label>
              <input
                type="text"
                name="userName"
                onChange={this.handleForm}
                placeholder="your name"
              />

              <label htmlFor="lastNAme">last name</label>
              <input
                type="text"
                name="lastNAme"
                // اذااخذت نفس الفانكشن مالت الانبت الفوك راح يختار واحد بيهم لذلك لازم اختار فانكشن جديدة
                onChange={this.handleChange}
                placeholder="last name"
              />
              <strong style={{ color: "red" }}>
                {this.state.errorVirtual}
              </strong>
              <label htmlFor="userNAme">age</label>
              <input
                type="text"
                name="age"
                // اذا اخذت نفس الفانكشن مالت الانبت الفوك راح يختار واحد بيهم لذلك لازم اختار فانكشن جديدة
                onChange={this.handleChange1}
                placeholder="age"
              />
              <strong style={{ color: "red" }}>{this.state.erroAge} </strong>
              <label htmlFor="email">email </label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                placeholder="your email"
                required
              />

              <label htmlFor="password">password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange3}
                placeholder="password"
              />

              <label htmlFor="password">confirm password </label>
              <input
                type="password"
                name="confirmPassword "
                onChange={this.handleChange3}
                placeholder="confirm password"
              />
              {this.state.passwordErr}

              <button type="submit" className="w-100  mt-4">
                send
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default App;
