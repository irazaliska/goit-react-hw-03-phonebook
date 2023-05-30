import PropTypes from 'prop-types';
import { ListItem, Text, DeleteBtn } from '../ContactListItem/ContactListItem.styled';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <ListItem>
      <Text>
        {name}: {number}
      </Text>
      <DeleteBtn type="button" onClick={() => onDelete(id)}>
        Delete
      </DeleteBtn>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
