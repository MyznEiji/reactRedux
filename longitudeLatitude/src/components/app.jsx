import React, {Component} from 'react';

import SearchForm from './searchForm';

// function App(props){
//   return (<div>Hello From Functional App</div>);
// }

class App extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
    };
  }


  handlePlaceSubmit(place)
  {
    console.log(place);
  }

  render(){
      // return (<div>Hello From Class App </div>);
    return (
      <div>
        <h1>緯度経度検索</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
      </div>
    );
  }
}


export default App;
