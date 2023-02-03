import PropTypes from 'prop-types';

import css from './ContactsList.module.css';
import ContactsListItem from './ContactsListItem';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsListItem
            key={id}
            name={name}
            number={number}
            onDelete={onDelete}
            id={id}
          />
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
export default ContactsList;
