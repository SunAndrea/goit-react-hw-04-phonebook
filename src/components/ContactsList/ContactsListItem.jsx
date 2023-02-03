import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';

import css from './ContactsList.module.css';
const ContactsListItem = ({ name, number, onDelete, id }) => {
  return (
    <li>
      {name}:<span> {number}</span>
      <button
        className={css.deleteBtn}
        onClick={() => onDelete(id)}
        type="button"
      >
        <AiFillDelete color="red" />
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactsListItem;
