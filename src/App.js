import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
         weatherList: []
      }
    }
      componentDidMount(){



        fetch('https://samples.openweathermap.org/data/2.5/forecast?q=Bangalore,IN&appid=b6907d289e10d714a6e88b30761fae22',{ method: 'get', mode: 'no-cors', })
        .then(results =>{
          return results.json();
        }).then(data =>{
          let weather = data.results.map((list) =>{

            return (
              <div key={list.results}>
              {list.main.temp}
              </div>

            )
          })
          this.setState({weather:weather});
          console.log(this.state.weather);
        })
      }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to weather</h2>
        </div>
        <p className="App-intro">
            <h2>Single HTML page displaying the 5 day weather forecast for Bangalore</h2>
            <div className="location">Location: Bangalore </div>
            <div className="Country">Country: India </div>
        </p>
          <div className="row_weather">

          <p className="weatherLists">
          <div class="bg-su weather dayslist">
          <h3><a href="#">Tuesday</a></h3>
          <h4>May 7</h4>
          <div class="icon i-3-l "></div>
          <div class="info">
                  <div class="temp ">
                      <span class="large-temp">34°</span>
                      <span class="small-temp">/23°C</span>
                  </div>
              <span class="cond">Partly sunny; nice</span>
          </div>
          </div>
        </p>


          <p className="weatherLists">
          <div class="bg-su weather dayslist">
          <h3><a href="#">Wednesday</a></h3>
          <h4>May 8</h4>
          <div class="icon i-3-l "></div>
          <div class="info">
                  <div class="temp ">
                      <span class="large-temp">34°</span>
                      <span class="small-temp">/23°C</span>
                  </div>
              <span class="cond">Partly sunny; nice</span>
          </div>
          </div>
        </p>



          <p className="weatherLists">
          <div class="bg-su weather dayslist">
          <h3><a href="#">Thusday</a></h3>
          <h4>May 9</h4>
          <div class="icon i-3-l "></div>
          <div class="info">
                  <div class="temp ">
                      <span class="large-temp">34°</span>
                      <span class="small-temp">/23°C</span>
                  </div>
              <span class="cond">Partly sunny; nice</span>
          </div>
          </div>
        </p>



          <p className="weatherLists">
          <div class="bg-su weather dayslist">
          <h3><a href="#">Friday</a></h3>
          <h4>May 10</h4>
          <div class="icon i-3-l "></div>
          <div class="info">
                  <div class="temp ">
                      <span class="large-temp">34°</span>
                      <span class="small-temp">/23°C</span>
                  </div>
              <span class="cond">Partly sunny; nice</span>
          </div>
          </div>
        </p>


          <p className="weatherLists">
          <div class="bg-su weather dayslist">
          <h3><a href="#">Satday</a></h3>
          <h4>May 11</h4>
          <div class="icon i-3-l "></div>
          <div class="info">
                  <div class="temp ">
                      <span class="large-temp">34°</span>
                      <span class="small-temp">/23°C</span>
                  </div>
              <span class="cond">Partly sunny; nice</span>
          </div>
          </div>
        </p>
        </div>

      </div>
    );
  }
}

export default App;
