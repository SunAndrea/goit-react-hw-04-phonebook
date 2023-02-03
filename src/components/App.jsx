import React, { Component } from 'react';

import ContactsForm from './ContactsForm/ContactsForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const jsonContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', jsonContacts);
    }
  }

  componentDidMount() {
    const parseJsonContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parseJsonContacts) {
      this.setState({ contacts: parseJsonContacts });
    }
  }

  onSubmitHandler = data => {
    const contactName = this.state.contacts.map(contact => contact.name);
    for (const name of contactName) {
      if (name.toLowerCase().includes(data.name.toLowerCase())) {
        window.alert(name + ' is already in contacts');
        return;
      }
    }

    this.setState({
      contacts: [...this.state.contacts, data],
    });
  };

  onFilterChange = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '480px',
          margin: 'auto',
          background: 'aliceblue',
          padding: '30px',
          boxShadow: '0 4px 4px rgb(0 0 0 / 15%)',
        }}
      >
        <h1 style={{ marginTop: '0' }}>Phonebook</h1>
        <ContactsForm onSubmit={this.onSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onChange={this.onFilterChange} value={this.state.filter} />
        <ContactsList
          contacts={filteredContacts}
          onDelete={this.onDeleteContact}
        />
      </div>
    );
  }
}
