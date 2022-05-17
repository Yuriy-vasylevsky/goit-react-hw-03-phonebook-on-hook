import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Section from './Components/Section/Section ';
import Forms from './Components/Form/Forms';
import PhoneList from './Components/PhoneList/PhoneList';
import FilterInput from './Components/FilterInput/FilterInput';
import Modal from './Components/Modal/modal';
import useLocalStorage from './Hook/useLocalStorage';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contact');
  const [filter, setFilter] = useState('');
  const [modal, setModal] = useState(false);

  const addNumber = obj => {
    if (
      contacts.find(({ name }) => {
        return name === obj.name;
      })
    ) {
      return openModal();
    }

    setContacts(prev => [...prev, obj]);
  };

  const openModal = () => {
    setModal(modal => !modal);
  };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const filteredContact = () => {
    let filtered = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return filtered;
  };

  const delNumber = id => {
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
