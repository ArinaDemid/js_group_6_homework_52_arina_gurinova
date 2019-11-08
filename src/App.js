import React, {Component} from 'react';
import './App.css';
import Circle from './components/circle';

class App extends Component {
  state = {
    numbers: [
      {number: 1},
      {number: 2},
      {number: 3},
      {number: 4},
      {number: 5}
    ]
  };
  
  render() {
    return (
      <div className="App">
        <div>
          <Circle number={this.state.numbers[0].number}/>
          <Circle number={this.state.numbers[1].number}/>
          <Circle number={this.state.numbers[2].number}/>
          <Circle number={this.state.numbers[3].number}/>
          <Circle number={this.state.numbers[4].number}/>
        </div>
      </div>
    );
  }
}

export default App;
