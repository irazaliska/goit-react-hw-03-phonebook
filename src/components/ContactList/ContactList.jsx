import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import { ListOfContacts } from '../ContactList/ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ListOfContacts>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
          />
        );
      })}
    </ListOfContacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
