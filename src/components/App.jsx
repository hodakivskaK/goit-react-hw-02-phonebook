import { nanoid } from 'nanoid'
import { Component } from 'react'
import { Section } from './section'
import { Form } from './form'
import { Filter } from './Filter'
import { Contacts } from './Contacts'


const INITIAL_STATE = {
  contacts: [   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  filter: '',
};

export class App extends Component {

  state = { ...INITIAL_STATE }
  
  formSubmit = ({ name, number }) => {
    const {contacts} = this.state;
    
     const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (name.length === 0 || number.length === 0){
      return alert(`Field is empty`);
    }

    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
       return alert(`${name} is already in contacts.`);
    }

    if (contacts.find(contact => contact.number === number)) {
       return alert(`Number: ${number} is already in contacts.`);
    }


     this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
    }));
  
  }
  
  filterId = nanoid()
  
  searchContact = (e) => {
    this.setState({ filter: e.currentTarget.value });
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }

  deleteContact = (id) => {
     this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
    
  }

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();
    
    return <div>
      <Section title="Phonebooks">
        
        <Form onSubmit={ this.formSubmit} />

      </Section>

      
      <Section title="Contacts" >
        {contacts.length > 1 && (
          <Filter filterId={this.filterId} value={filter} onChange={this.searchContact} />
        )}
       
    
        {contacts.length > 0 ?
          <Contacts contacts={visibleContacts} deleteContact={ this.deleteContact} /> :
          <p>The phonebook is empty</p>
        }
             
      </Section>


    
    </div>
  }

};
