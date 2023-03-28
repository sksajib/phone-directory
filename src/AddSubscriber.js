import React,{Component, useState} from "react";
import Header from "./Header"
import "./AddSubscriber.css"
class AddSubscriber extends Component{
    constructor(){
        super()
        this.state={
            id:0,
            name:'',
            phone:'',
        }
    }
    handleInputChange=(e)=>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState(state);
        console.log(this.state);
    }
    
    render(){
        return(
            <div>
                <Header head="Add Subscriber"/>
                <div id="container1">
                    <button className="backButton" onClick={()=>this.handleBackButtonclick} >Back</button>
                    <form className="subscriber-Form">
                        <label htmlFor="name" className="label-element">Name: </label><br/>
                        <input type="text" id="name" className="input-element" name="name"placeholder="Type Your Name"onChange={this.handleInputChange}/><br/><br/> 
                        <label htmlFor="phone" className="label-element">Phone: </label><br/>
                        <input type="text" id="phone" className="input-element" name="phone" placeholder="Type Your Phone"onChange={this.handleInputChange}/><br/><br/> 
                        <div className="subscriber-to-be-added">
                        <span className="subscriber-heading">Subscriber to be added</span><br/>
                        <span className="subscriber-info">Name:{this.state.name}</span><br/>
                        <span className="subscriber-info">Phone:{this.state.phone}</span>
                    </div><br/>
                    <button className="addButton" type="submit" onSubmit={()=>this.handleSubmit}>Add</button>
                    </form>
                    
                </div>
            </div>
        )
        }
}
export default AddSubscriber;


