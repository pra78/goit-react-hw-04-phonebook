import PropTypes from 'prop-types';
import { useState } from 'react';
import { ContactFormStyled, InputStyled } from './ContactForm.styled';

const ContactForm = (props) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = event => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case ('name'):
                setName(value);
                break;
            case ('number'):
                setNumber(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.onSubmit({ name, number });
        setName('');
        setNumber('');
    }

    return (
        <ContactFormStyled onSubmit={handleSubmit}>
            <p>Name</p>
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <p>Number</p>
            <InputStyled
                type="tel"
                name="number"
                value={number}
                onChange={handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <input type="submit" value="Add contact" />
        </ContactFormStyled>
    );
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default ContactForm;