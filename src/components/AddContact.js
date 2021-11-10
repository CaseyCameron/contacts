import React, { Component } from 'react';
import './AddContact.css';

export default class AddContact extends Component {
  state = {
    name: '',
    age: ''
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleAgeChange = (e) => {
    this.setState({ age: e.target.value })
  };

  handleSubmit = (e) => {
    const { handleAddContact } = this.props;
    e.preventDefault();
    handleAddContact(this.state);
  };

  render() {
    const { name, age } = this.state;
    return (
      <form className='form'
        onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input value={name} onChange={this.handleNameChange} />
        </label>
        <label>
          Age:
          <input value={age} onChange={this.handleAgeChange} />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}
