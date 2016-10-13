import React from 'react';

class SubscriptionForm extends React.Component {
  constructor(){
    super();
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("FUCK")
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='subscription-form'>
        <input type='text' placeholder='email' onChange={this.handleChange} />
        <input type="submit" name="commit" />

      </form>
    )
  }
}

export default SubscriptionForm;
