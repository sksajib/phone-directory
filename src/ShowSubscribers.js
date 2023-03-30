import React,{Component, useState}from "react";
import Header from "./Header";
import "./ShowSubscribers.css";
import {Link} from "react-router-dom"

class ShowSubscribers extends Component{
  
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
  constructor(props){
    super(props);
    this.state={
      id:"",
      name:"",
      phone:""
    }
  }
  onDeletedClick = (sub) => {
    console.log(1)
    let subscriber=this.state
    subscriber['id']=sub.id
    subscriber['name']=sub.name
    subscriber['phone']=sub.phone
    this.setState(subscriber)
    console.log(this.state)
    this.props.deleteSubscriberHandler(this.state); 
  }
  render(){
    
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
        
          <button value="Delete"  className="deleteButton" onClick={this.onDeletedClick.bind(this,sub)}>{sub.id}</button>
        </div>
      })}
      
    </div>
    );
  }
}
export default ShowSubscribers;

