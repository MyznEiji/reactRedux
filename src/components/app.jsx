import React, {Component} from 'react';

import Greeting from './greeting';
//
// function App(props){
//   return (<div>Hello From Functional App</div>);
// }

class App extends Component{
  render(){
      // return (<div>Hello From Class App </div>);
    return (
      <div>
        <Greeting name="Bob" />
        <Greeting name="John" />
      </div>
    );
  }
}


export default App;
