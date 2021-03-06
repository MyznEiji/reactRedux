import React, {Component} from 'react';
import axios from 'axios';

import SearchForm from './searchForm';
import GeocodeResult from './GeocodeResult';
import Map from './Map';

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json'
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


  setErrorMessage(message){
    this.setState({
      address: message,
      lat: 0,
      lng: 0,
    });
  }


  handlePlaceSubmit(place)
  {
    axios
      .get(GEOCODE_ENDPOINT, {params: {address: place} })
      .then((results) => {
        console.log(results);
        const data = results.data;
        const result = data.results[0];
        switch(data.status){
          case 'OK': {
            const location = result.geometry.location;
            this.setState({
              address: result.formatted_address,
              lat: location.lat,
              lng: location.lng,
            });
            break;
          }
          case 'ZERO_RESULTS': {
            this.setErrorMessage('結果が見つかりません');
            break;
          }
          default: {
            this.setErrorMessage('エラーが発生しました');
          }
        }
      })
      .catch(() => {
        this.setErrorMessage('通信に失敗しました');
      });

  }

  render(){
      // return (<div>Hello From Class App </div>);
    return (
      <div>
        <h1>緯度経度検索</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
        <GeocodeResult
          address={this.state.address}
          lat={this.state.lat}
          lng={this.state.lng}
        />
        <Map lat={this.state.lat}  lng={this.state.lng}/>
      </div>
    );
  }
}


export default App;
