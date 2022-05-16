import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Section from './Components/Section/Section ';
import Forms from './Components/Form/Forms';
import PhoneList from './Components/PhoneList/PhoneList';
import FilterInput from './Components/FilterInput/FilterInput';
import Modal from './Components/Modal/modal';

export default function App() {
  // state = {
  //   contacts: '',
  //   //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   // ],
  //   filter: '',
  //   modal: false,
  // };

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const [modal, setModal] = useState(false);

  // componentDidMount() {
  //   let sevContact = localStorage.getItem('contact');
  //   let parsedContact = JSON.parse(sevContact);
  //   if (parsedContact) {
  //     this.setState({ contacts: parsedContact });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     let contact = this.state.contacts;
  //     localStorage.setItem('contact', JSON.stringify(contact));
  //   }
  // }

  // useEffect(() => {
  //   let sevContact = localStorage.getItem('contact');
  //   let parsedContact = JSON.parse(sevContact);

  //   if (parsedContact) {
  //     setContacts(parsedContact);
  //   }

  //   let contact = setContacts(parsedContact);
  //   localStorage.setItem('contact', JSON.stringify(contact));
  // }, [contacts]);

  const addNumber = obj => {
    if (
      contacts.find(({ name }) => {
        return name === obj.name;
      })
    ) {
      return openModal();
    }

    // setState(prev => {
    //   return { contacts: [...prev.contacts, obj] };
    // });

    setContacts(prev => [...prev, obj]);
  };

  const openModal = () => {
    // this.setState(prev => ({ modal: !prev.modal }));
    setModal(prev => !prev);
  };

  const handleChange = e => {
    // this.setState({ filter: e.target.value });
    setFilter(e.target.value);
  };

  const filteredContact = () => {
    let filtered = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return filtered;
  };

  const delNumber = id => {
    // this.setState(prev => ({
    //   contacts: prev.contacts.filter(contact => contact.id !== id),
    // }));
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <div className="box">
      {modal && <Modal openModal={openModal} />}
      <Section title="Телефонная книга">
        <Forms addNumber={addNumber} contact={contacts} />
      </Section>
      <Section title="Знайти">
        <FilterInput handleChange={handleChange} value={filter} />
      </Section>
      <Section title="Номера телефонов">
        <PhoneList contacts={filteredContact()} del={delNumber} />
      </Section>
    </div>
  );
}
