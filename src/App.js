import React,{Component, useState}from "react";
import Header from "./Header";
import "./App.css";
class App extends Component{
  render(){
    return(
      <div>
        Phone Directory
        <br/>
        <input type="text" placeholder="Your Name"/>
      </div>
    );
  }
}
class App3 extends Component{
  render(){
  return(
 <div>
<label htmlFor="username"> Username: </label> <br/>
<input id="username" type="text"/>
<label htmlFor="password">Password: </label><br/>
<input id="password" type="password"/><br/>
</div>
);}
}
//export default App3;
function App1() {
  //let x=3;
  //let y=2;
  const [name,setName]=useState('');
  let [phone,setPhone]=useState('');
  const handleName=(event)=> {setName(event.target.value);};
  const handlePhone=(event)=>{setPhone(parseInt(event.target.value));};
  if (isNaN(phone)){
    phone='';
  }
  const subscriber=[
    {
      id:1,
      aname:"SAJIB",
      aphone:7439851918
    },
    {
      id:2,
      aname:"PURBA",
      aphone:8337052095
    }
  ]
  const buttonclick=(msg)=>{
    alert(msg)
  }
  return (
    <div> 
      <Header head="Phone Directory Prototype"/> 
      <div className="inputDiv">
      <input type="text" placeholder="Type your Name" value={name} onChange={handleName} id='nameid'/>
      <input type="text" placeholder="Type your Number" value={phone} onChange={handlePhone} id='phoneid'/><br/>
      </div>
      <button className="button1">Add</button>
    <div style={{marginLeft:15}}>
     {/* { <span className="nameLabel">Name: {name}</span>
      <br/>
      <span className="phoneLabel">Phone: {phone}</span> */}
      <div className="displayNaPh">
        <p className="addName">NAME</p>
        <p className="addPhone">PHONE</p>
      </div>
      <div className="displayNaPh">
        <p className="addName">SAJIB</p>
      </div>
      <div className="displayNaPh1">
        <p className="addName">PURBA</p>
      </div>
      {subscriber.map(sub=>(
        <div className="displayNaPh1" key={sub.id}>
          <p className="addName1">{sub.aname}</p>
          <p className="addPhone1">{sub.aphone}</p>
          <button value="Delete" onClick={()=>buttonclick("Delete "+sub.aname)} className="deleteButton">DELETE</button>
        </div>
      ))}
      
    </div>
    
  
  {
    // <label htmlFor="name">Name:</label>
    // <input id="name" type="text" placeholder="your name" defaultValue={x+y}/>
    // </div>
    // /* JSX is case sensitive */
  }
   </div>
  );
}
class App4 extends Component{
  constructor(){
    super()
    this.state={
      SubscriberList:[]
    }
  }
   

  render(){
    let   subscriber=[
      {
        id:1,
        aname:"SAJIB",
        aphone:7439851918
      },
      {
        id:2,
        aname:"PURBA",
        aphone:8337052095
      }
    ]
    return(
    <div> 
      <Header head="Phone Directory Prototype"/>
      <button className="button1">Add</button>
      <div className="displayNaPh">
        <p className="addName">NAME</p>
        <p className="addPhone">PHONE</p>
      </div>
      {this.state.SubscriberList.map (sub=>{
        return <div className="displayNaPh1" key={sub.id}>
          <p className="addName1">{sub.aname}</p>
          <p className="addPhone1">{sub.aphone}</p>
          <button value="Delete"  className="deleteButton">DELETE</button>
        </div>
      })}
      
    </div>
    );
  }
}
export default App4;

