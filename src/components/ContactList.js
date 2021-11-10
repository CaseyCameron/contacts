import React, { Component } from 'react';

export default class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {
          contacts.map(contact => {
            return (
              <li key={contact.name}>
                <p>Name: {contact.name}</p>
                <p>Age: {contact.age}</p>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
