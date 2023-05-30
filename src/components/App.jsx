import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import { Section } from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      return alert(`Contact "${name}" is already in contacts list`);
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };
  
  handleSearch = event => {
    this.setState({ filter: event.target.value.toLowerCase() });
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    return (
      <Container>
        <Section title='Phonebook'>
        <ContactForm addContact={this.addContact} />
        </Section>
        <Section title='Contacts'>
          <Filter handelSearch={this.handleSearch} />
          <ContactList
            contacts={filteredContacts}
            onDelete={this.handleDelete}
          />
        </Section>
      </Container>
    );
  }
}
