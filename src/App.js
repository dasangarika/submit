import  React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import About from './About.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends React.Component{
    /*componentWillMount(){
          var firebaseConfig = {
        apiKey: "AIzaSyApPYXubqRixlQTZa-N5EIiIB9TST_uZMo",
        authDomain: "reactproject-5f123.firebaseapp.com",
        databaseURL: "https://reactproject-5f123.firebaseio.com",
        projectId: "reactproject-5f123",
        storageBucket: "reactproject-5f123.appspot.com",
        messagingSenderId: "1048146148476",
        appId: "1:1048146148476:web:92694c3baa3c4f6522ddf9",
        measurementId: "G-0VLXBFE7LG"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    
    firebase.database().ref()
    }*/
    constructor(props){
      super(props);
      this.state={
          fullname: "",
          rollnumber: "",
          class: "",
          section: "",
          nameError: "",
          rollNumbererror: "",
          classerror:"",
          sectionerror:""
        }
          this.handleChange =this.handleChange.bind(this);
            }
    handleChange =(event) =>{
      this.setState({[event.target.name] :event.target.value})
    }
    validate = () =>{
        let nameError: "";
        if(!this.state.fullname  || !this.state.rollnumber ||!this.state.class || !this.state.section ){
          alert("All Fields Are Compulsory");
          nameError="Error";
        }
          if (!Number(this.state.rollnumber)) {
            alert("Your rollNumber must be a number");
            nameError="Error";
          }
          if (this.state.class<1 ||this.state.class>12) {
            alert("Class must be in the range of 1 - 12");
            nameError="Error";
          }
          let sec=this.state.section;
          if(sec!=="A" && sec!=="B"  && sec!=="C"  && sec!=="D"  && sec!=="E"  && sec!=="F" ){
            alert("Section must be from A-F");
            nameError="Error";
         }
        if(nameError){
          this.setState({nameError});
          return false;
        }
        return true;
    }
    handlesubmit =(event) =>{
      alert(`name: ${this.state.fullname} Roll number: ${this.state.rollnumber} Class: ${this.state.class} Section: ${this.state.section}`);
    //  event.preventDefault();
      const isValid =this.validate();
      if(isValid){
        alert("Form Successfully Submitted");
      }
    }
      render(){
        return (
         <div className="container">
            <header className="App-header">
              <h1>Student Info</h1>
                  </header>
            <div className="jumbotron">
            <h2>Add Student</h2>
           
            <form onSubmit={this.handlesubmit}>
            <input type="text" placeholder="Enter the student name" Name="fullname"value={this.state.fullname}
             onChange={ this.handleChange} / >
             <div>
              {this.state.nameError}
             </div>
            <br />
            <input type="text" placeholder="Enter the Roll number" Name="rollnumber"    value={this.state.rollnumber}
             onChange= {this.handleChange}/ >
             <div>
              {this.state.rollNumbererror}
             </div>
              <br />
            <input type="text" placeholder="Enter the class" Name="class"    value={this.state.class}
               onChange={ this.handleChange} / >
               <div>
                {this.state.classerror}
               </div>
              <br />
            <input type="text" placeholder="Enter the section"  Name="section"    value={this.state.section}
             onChange={ this.handleChange}/ >
             <div>
              {this.state.sectionerror}
             </div>
              <br />
              <input type="submit" className="Submit" value="Add student" / >
              </form>
            </div>
        </div>
        );
      }
    }   
export default App;
