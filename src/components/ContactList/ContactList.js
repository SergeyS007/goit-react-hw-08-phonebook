import React from 'react';
import ContactListItem from './ContactListItem';
import css from 'components/ContactList/ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  console.log('fff   ', filteredContacts);

  return (
    <div>
      {contacts.length > 0 && (
        <div>
          <h2 className={css.title}>List of contacts</h2>
          <table className={css.contacts}>
            <tr className={css.contactsItem}>
              <th>Name</th>
              <th>Phone</th>
              <th>Delete contact</th>
            </tr>
            {filteredContacts.map(contact => (
              <ContactListItem key={contact.id} contact={contact} />
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactList;
