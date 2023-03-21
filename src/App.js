import React,{Component} from "react";
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
function App1() {
  return (
    <div>    <div>
     Phone Directory
    </div>
     <button>Add</button>
    <div>
      <span >Name:</span>
      <span>Phone:</span>
    </div>
    </div>

  );
}

export default App1;

