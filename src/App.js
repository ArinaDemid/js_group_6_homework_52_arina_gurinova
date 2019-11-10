import React, {Component} from 'react';
import './App.css';
import Circle from './components/circle';

class App extends Component {

  generateNumbers = () => {
    let numbers = [];
    while (numbers.length < 5) {
      let item = Math.floor(Math.random() * 32 + 5);
      if (numbers.indexOf(item) === -1) {
        numbers.push(item);
      };
    }
    let result = numbers.sort(function(a, b) {
      return a - b;
    });
    return result;
  };

  state = {
    numbers: [
      {number: this.generateNumbers()[0]},
      {number: this.generateNumbers()[1]},
      {number: this.generateNumbers()[2]},
      {number: this.generateNumbers()[3]},
      {number: this.generateNumbers()[4]}
    ]
  };

  changeNumbers = () => {
    const result = this.generateNumbers();
    const numbers = [...this.state.numbers];
    numbers[0].number = result[0];
    numbers[1].number = result[1];
    numbers[2].number = result[2];
    numbers[3].number = result[3];
    numbers[4].number = result[4];
    this.setState({numbers});
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
