import React from 'react';
class Teacher extends React.Component{
constructor(props){
  super(props);
  this.state ={
                fullname: "",
                teacherid: "",
                class: "",
                nameError:""
              }
            }

handleChange =(event) =>{
  this.setState({[event.target.name] :event.target.value})
}
validate = () =>{
  let nameError: "";
  if(!this.state.fullname  || !this.state.teacherid ||!this.state.class || !this.state.section ){
    alert("All Fields Are Compulsory");
    nameError="Error";
  }
    if(this.state.fullname && !this.state.class) {
      alert("Teacher must teach a class");
      nameError="Error";
    }
    if(nameError){
      this.setState({nameError});
      return false;
    }
    return true;
    }
handlesubmit =(event) =>{
  alert(`Teacher Name: ${this.state.fullname} Teacher id: ${this.state.teacherid} Class & Section: ${this.state.class}`);
  const isValid =this.validate();
  if(isValid){
    alert("Form Successfully Submitted");
}
}

  render(){
    return (
      <div className="container">
        <header className="App-header">
          <h1>Teacher Info</h1>
              </header>
        <div className="jumbotron">
        <h2>Add Teacher</h2>
        <form onSubmit={this.handlesubmit}>
        <input type="text" placeholder="Enter the Teacher name" Name="fullname" value={this.state.fullname}
         onChange={ this.handleChange} / >
        <br />
        <br />
        <input type="text" placeholder="Enter The Teacher Id" Name="teacherid" value={this.state.teacherid}
         onChange= {this.handleChange}/ >
          <br /><br />
          <div>
          </div>
        <input type="text" placeholder="Enter the classes with sections taught by the teacher" Name="class" value={this.state.class}
           onChange={ this.handleChange} / >
          <br /><br />
          <input type="submit" className="Submit" value="Add Teacher" / >
          <div>
              {this.state.nameError}
             </div>
          </form>
        </div>
      </div>
    );
  }
}


export default Teacher;
