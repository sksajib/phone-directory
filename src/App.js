import React,{Component, useState}from "react";
import Header from "./Header";
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
<input id="username" type="text"/><br/>
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
  return (
    <div> 
      <Header/> 
      <input type="text" placeholder="Type your Name" value={name} onChange={handleName} id='nameid'/><br/>
      <input type="text" placeholder="Type your Number" value={phone} onChange={handlePhone} id='phoneid'/><br/>
      <button>Add</button>
    <div>
      <span >Name: {name}</span>
      <br/>
      <span>Phone: {phone}</span>
      
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

export default App1;

