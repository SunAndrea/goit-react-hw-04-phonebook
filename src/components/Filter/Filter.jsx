import PropTypes from 'prop-types';

import css from './Filter.module.css';
const Filter = ({ onChange, value }) => {
  return (
    <>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="filter"
          onChange={onChange}
          value={value}
        />
      </label>
    </>
  );
};

Filter.propType = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Filter;
