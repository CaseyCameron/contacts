import React, { Component } from 'react';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

export default class App extends Component {
  state = {
    contacts: []
  }

  handleAddContact = (contact) => {
    const { contacts } = this.state;
    const updatedContacts = [...contacts, contact];
    this.setState({ contacts: updatedContacts });
  };

  render() {
    return (
      <div>
        <AddContact handleAddContact={this.handleAddContact} />
        <ContactList contacts={this.state.contacts} />
      </div>
    )
  }
}
