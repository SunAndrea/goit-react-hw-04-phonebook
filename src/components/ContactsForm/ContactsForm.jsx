import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Contacts.module.css';
class ContactsForm extends Component {
  state = {
    id: null,
    name: '',
    number: '',
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  onFormChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value,
      id: nanoid(),
    });
  };

  onFormSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.onFormSubmit} action="">
        <label className={css.formLabel}>Name</label>
        <input
          className={css.formInput}
          value={this.state.name}
          onChange={this.onFormChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.formLabel}>Number</label>
        <input
          className={css.formInput}
          value={this.state.number}
          onChange={this.onFormChange}
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
  }
}
ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactsForm;
