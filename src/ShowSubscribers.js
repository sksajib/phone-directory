import React,{Component, useState}from "react";
import Header from "./Header";
import "./ShowSubscribers.css";
import {Link} from "react-router-dom"

class ShowSubscribers extends Component{
  constructor(){
    super()
    this.state={
      subscribersList:[]
    }
    console.log("Constructor called")
  }
  //  componentDidMount(){
  //   let newSubscriber={
  //     id:5,
  //     name:"SAJIB SAHA",
  //     phone:7439851918
  //   }
  //   let subList=this.state.SubscriberList1
  //   subList.push(newSubscriber)
  //   this.setState({SubscriberList1:subList})
  //  }
   
  render(){
    console.log("render called")
    
    return(
    <div> 
      <Header head="Phone Directory Prototype"/>
      <Link to="/add"><button className="button1">Add</button></Link>
      <div className="displayNaPh">
        <p className="addName">NAME</p>
        <p className="addPhone">PHONE</p>
      </div>
      {this.props.subscribersList.map (sub=>{
        return<div className="displayNaPh1" key={sub.id}>
          <p className="addName1">{sub.name}</p>
          <p className="addPhone1">{sub.phone}</p>
          <button value="Delete"  className="deleteButton">DELETE</button>
        </div>
      })}
      
    </div>
    );
  }
}
export default ShowSubscribers;

