import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import { ContactForm, ContactList, Filter } from "components";

const App = () => {
  const [contacts, setContacts] = useState(
    [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => { 
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => { 
    if (contacts.find(el => el.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    
    setContacts((prevContacts) => ([{ name, number, id: nanoid() }, ...prevContacts]));
  };

  const handleFilterChange = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
        
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <Filter value={filter} onFilter={handleFilterChange} />
      <ContactList contacts={getFilteredContacts(contacts)} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;