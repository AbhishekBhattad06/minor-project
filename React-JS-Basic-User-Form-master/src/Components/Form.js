import React, { Component } from 'react'
import './CSS/todo.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            email:"",
            gender: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    phonehandler = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {

        if (this.state.firstName === "") {

            alert("First name is mandatory!");
  
            return;
  
          }
          if (this.state.lastName === "") {

            alert("Last name is mandatory!");
  
            return;
  
          }
          if (this.state.phone === "") {

            alert("Phone Number is mandatory!");
  
            return;
  
          }
         
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            email:"",
            phone: '',
            gender: "",
        })
     event.preventDefault()
        
    }





    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>Train Reservation System</h1>
                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="First Name" /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="Last Name" /><br />
                    <label>Email Id :</label> <input type="email" value={this.state.email} onChange={this.emailhandler} placeholder="Email ID"/> <br />
                    <label>Phone :</label> <input type="text" value={this.state.phone} onChange={this.phonehandler} placeholder="Phone Number" /><br />
                    <label>Gender :</label><select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />

                    <label for ="Source">Source</label>
            <select name="Source" id="Source">
                <option value="Banglore">Banglore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Delhi">Delhi</option>
            </select><br />
            <label for ="Destination">Destination</label>
            <select name="Destination" id="Destination">
                <option value="Banglore">Banglore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Delhi">Delhi</option>
            </select><br />
                    <input type="submit" value="Submit" />
                    <h2>Details Entered </h2>
                
                        <h3>{this.state.firstName}</h3>
                        <h3>{this.state.lastName}</h3>
                        <h3>{this.state.email}</h3>
                        <h3>{this.state.Gender}</h3>
                        <h3>{this.state.phone}</h3>
                </form>

            </div>
            
        )
    }
}



export default Form
