import PropTypes from 'prop-types';
import { ContactListStyled, ListItem } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
         <ContactListStyled>
          {contacts.map(({ name, number, id }) => (
              <ListItem key={id}>
                  <strong>&#8226;</strong>{name}: {number}
                  <button
                    type="button"
                    className="TodoList__btn"
                    onClick={() => onDeleteContact(id)}
                >Delete</button>
              </ListItem>
              
          ))}
        </ContactListStyled>
    )
}

ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })).isRequired,
}

export default ContactList;