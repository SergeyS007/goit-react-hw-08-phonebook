import css from 'components/ContactList/ContactList.module.css';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { number, name, id } = contact;
  console.log('contact in Item  ', contact);
  const onDeleteContact = () => dispatch(deleteContact(id));

  return (
    <tr className={css.contactsItem} key={id}>
      <td>{name}</td>
      <td>{number}</td>
      <td>
        <button className={css.button} onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
