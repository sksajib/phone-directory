import React,{Component} from "react"
import AddSubscriber from "./AddSubscriber"
import ShowSubscribers from "./ShowSubscribers"
import { BrowserRouter as Router,Route } from "react-router-dom";

class PhoneDirectory extends Component{
    constructor(){
        super();
        
        this.state={
            subscribersList:[{
                id:0,
                name:"SAJIB",
                phone:74398
            }]
        }
        
    }
    deleteSubscriberHandler=(sub)=>{
        console.log(2)
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0;
        subscribersList.forEach(function (subscriber, index) {
            if (subscriber.id === sub) {
                subscriberIndex = index;
            }
        }, this);
        let newSubscribers = subscribersList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({subscribersList: newSubscribers})
      }
    addSubscriberHandler=(newSubscriber)=>{
        let subscribersList=this.state.subscribersList
        if(subscribersList.length>0){
            newSubscriber.id=subscribersList[subscribersList.length-1].id+1
        }
        else
            newSubscriber.id=1
        subscribersList.push(newSubscriber)
        this.setState({subscribersList:subscribersList})
    
    }
    render(){
    
        return(
            <Router>
            
            <div>
            {//<AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
            }
                <Route exact path="/" render={(props)=><ShowSubscribers  subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>} />
                <Route exact path="/add" render={({history},props)=><AddSubscriber  history={history} addSubscriberHandler={this.addSubscriberHandler}/>}/>    
            
                </div>
            </Router>
        )
    }
}
export default (PhoneDirectory)