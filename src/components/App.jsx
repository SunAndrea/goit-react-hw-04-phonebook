import { useState, useEffect } from 'react';

import ContactsForm from './ContactsForm/ContactsForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitHandler = data => {
    const contactName = contacts.map(contact => contact.name);
    for (const name of contactName) {
      if (name.toLowerCase().includes(data.name.toLowerCase())) {
        window.alert(name + ' is already in contacts');
        return;
      }
    }

    setContacts([...contacts, data]);
  };

  const onFilterChange = evt => {
    const { value } = evt.currentTarget;

    setFilter(value);
  };

  const onDeleteContact = id => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== id);
    });
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
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
      <ContactsForm onSubmit={onSubmitHandler} />
      <h2>Contacts</h2>
      <Filter onChange={onFilterChange} value={filter} />
      <ContactsList contacts={filteredContacts} onDelete={onDeleteContact} />
    </div>
  );
};
