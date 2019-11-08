import React, {Component} from 'react';
import './App.css';
import Circle from './components/circle';
import showNumber from './components/showNumber';

class App extends Component {
  state = {
    numbers: [
      {number: showNumber[0]},
      {number: showNumber[1]},
      {number: showNumber[2]},
      {number: showNumber[3]},
      {number: showNumber[4]}
    ]
  };
  
  render() {
    return (
      <div className="App">
        <div>
          <button className='btn' onClick={this.changeNumbers}>New Numbers</button>
        </div>
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
