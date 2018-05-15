import React, {Component} from 'react';

import Greeting from './greeting';
//
// function App(props){
//   return (<div>Hello From Functional App</div>);
// }

class App extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      name: "Hoge",
    };
  }

  //eはdomのイベントを取得している、
  handlNameChange(name)
  {
    // target.valueはinputで入力された文字を取得

    this.setState({ name });
  }


  render(){
      // return (<div>Hello From Class App </div>);
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.handlNameChange(e.target.value)}
        />
        <button onClick={() => this.handlNameChange('Bob')}>I am Bob</button>
        <Greeting name={this.state.name } />

      </div>
    );
  }
}


export default App;
