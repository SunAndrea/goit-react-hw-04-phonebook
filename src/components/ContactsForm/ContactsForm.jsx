import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Contacts.module.css';
const ContactsForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onFormSubmit = evt => {
    evt.preventDefault();

    const contactInfo = {
      id: nanoid(),
      name,
      number,
    };
    onSubmit(contactInfo);
    reset();
  };
  return (
    <form className={css.form} onSubmit={onFormSubmit} action="">
      <label className={css.formLabel}>Name</label>
      <input
        className={css.formInput}
        value={name}
        onChange={onInputChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.formLabel}>Number</label>
      <input
        className={css.formInput}
        value={number}
        onChange={onInputChange}
        style={{ display: 'block' }}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.formBtn}>add contact</button>
    </form>
  );
};
ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactsForm;
