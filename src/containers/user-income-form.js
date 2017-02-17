import React, { Component } from 'react';
import userIncome from '../components/user-income';

export default class userIncomeForm extends Component {
  constructor(props){
    super(props);

    console.log(userIncome);

    this.state = {inputs: userIncome, total : 0}

  }

  onInputChange(value, index) {
    console.log(value, index);
    // var abc = this.state.inputs;
    // abc[index].value = value;
    // this.setState({inputs: abc});

    this.setState( previousState => {
      previousState.inputs[index].value=value
      return previousState
})

  }


  createItems() {
    return userIncome.map((field,index) => {
      return (
        <div key={field.label}>
          <input
          name={field.label}
          value={this.state.inputs[index].value}
          onChange={(event) => this.onInputChange(event.target.value,index )}
          type="number"
          />
        </div>
      );
    });
  }

  render() {
    let total = this.state.inputs.reduce(function(acc, input){
      console.log(input);
        return acc + Number(input.value);
    }, 0);
    return (
      <div>
      { total }
      <br />
        { this.createItems() }
      </div>
    )
  }
}
