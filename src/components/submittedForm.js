import React, { Component } from "react";

class SubmittedForm extends Component {

  constructor() {
    super();
    this.state = {
      form: "",
      isSubmitted: false,
    }

  this.handleChange= this.handleChange.bind(this);
  this.handleSubmit= this.handleSubmit.bind(this); 
  } 

  handleChange(event) {
    this.setState({ form: event.target.value })
  }   

  handleSubmit(event) {
  event.preventDefault(); 
    this.setState({ isSubmitted: true })
    alert(this.state.name + ' was submitted');
  }

  render() {

    const isSubmitted = this.state.isSubmitted;

    let content;
    if (isSubmitted) { //change to display form
      content = <div></div>;
    } else {
      content = (
        <form onSubmit={this.handleSubmit}>
            <label>
            Form:
            <input type="text" value={this.state.form} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
      );
    }
    
    return <div>{content}
        <div>displayForm</div>
    </div>;

  }
}

export { SubmittedForm }