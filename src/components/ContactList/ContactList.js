// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import s from './ContactList.module.css';
import actions from '../../redux/actions';

export default function ContactList() {
  const getVisibleContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const contacts = useSelector(({ contacts: { items, filter } }) =>
    getVisibleContacts(items, filter),
  );
  const dispatch = useDispatch();

  return (
    <>
      <ul className={s.contactList}>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={contId => dispatch(actions.deleteContact(contId))}
          />
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

// step_1
// const getVisibleContacts = (contacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStatetoProps = ({ contacts: { items, filter } }) => ({
//   contacts: getVisibleContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: contId => dispatch(actions.deleteContact(contId)),
// });

// export default connect(mapStatetoProps, mapDispatchToProps)(ContactList);
