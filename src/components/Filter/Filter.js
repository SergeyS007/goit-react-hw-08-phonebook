import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { filterContact } from 'redux/contacts/contactsSlice';
import css from '../Filter/Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onChange = e => {
    console.log(e.currentTarget.value);
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <div>
      {contacts.length > 0 && (
        <label className={css.filter_label}>
          Find contacts by name
          <input
            className={css.filter_input}
            type="text"
            value={filter}
            onChange={onChange}
          />
        </label>
      )}
    </div>
  );
};

export default Filter;
