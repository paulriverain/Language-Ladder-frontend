import React, { Component } from 'react';

class TestForm1 extends Component {

  state ={
    answerForm: "",
  }

  handleChange= (e) =>{
    console.log(e.target.value);
    this.setState({answerForm: e.target.value})
  }



  coolFunction = () =>{
    const answer = this.state.answerForm.toLowerCase()
    const given = this.props.info.user_message.toLowerCase()

  return answer === given
  }



  render () {
    console.log(this.props.info.user_message);
    console.log(this.state.answerForm);
    return (

      <div>
        <input type=""  placeholder="Answer" name="answer" onChange={this.handleChange} />
        {this.coolFunction() ? <h4>Correct!!!!!</h4>:null}
      </div>
    )
  }
}

export default TestForm1;
