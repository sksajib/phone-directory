import React,{Component} from "react";
import Header from "./Header"
import "./AddSubscriber.css"
import {Link} from "react-router-dom" 
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
    }
    onFormSubmitted=(e)=>{
        e.preventDefault();
        this.props.addSubscriberHandler(this.state)
        this.setState({id:0,name:'',phone:''})
        this.props.history.push("/")
        
    }
    
    render(){
        return(
            <div>
                <Header head="Add Subscriber"/>
                <div id="container1">
                <Link to="/"><button className="backButton" onClick={()=>this.handleBackButtonclick} >Back</button></Link>
                    <form className="subscriber-Form" onSubmit={this.onFormSubmitted.bind(this)}>
                        <label htmlFor="name" className="label-element">Name: </label><br/>
                        <input type="text" id="name" className="input-element" name="name"placeholder="Type Your Name"onChange={this.handleInputChange}/><br/><br/> 
                        <label htmlFor="phone" className="label-element">Phone: </label><br/>
                        <input type="text" id="phone" className="input-element" name="phone" placeholder="Type Your Phone"onChange={this.handleInputChange}/><br/><br/> 
                        <div className="subscriber-to-be-added">
                        <span className="subscriber-heading">Subscriber to be added</span><br/>
                        <span className="subscriber-info">Name:{this.state.name}</span><br/>
                        <span className="subscriber-info">Phone:{this.state.phone}</span>
                    </div><br/>
                    <button className="addButton" type="submit" >Add</button>
                    </form>
                    
                </div>
            </div>
        )
        }
}
export default AddSubscriber;


