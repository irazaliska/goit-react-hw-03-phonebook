import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from '../ContactForm/ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    addContact: PropTypes.func.isRequired
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    this.props.addContact(this.state);
    form.reset();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>Name</Label>
        <Input
          onChange={this.handleChange}
          type="text"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label>Number</Label>
        <Input
          onChange={this.handleChange}
          type="tel"
          name="number"
          id="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
