import React, { Component } from 'react';
import './App.css';

class App extends Component{
constructor(props){
  super(props);
  this.state ={
   timer:0,
  };
}
componentDidMount = () =>{
  setInterval(() => {
    this.setState(prevState => ({
      timer:prevState.timer +1,
    }

    )
      )
  },1000 )
}
render() {
  return(
<span> Counter:{this.state.timer}</span>
)
}





}


export default App;
