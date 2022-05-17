import './Form.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';

export default function Forms({ addNumber }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const obj = {
      id: nanoid(),
      name: name,
      number: number,
    };

    addNumber(obj);

    restForm();
  };

  const restForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Имя"
            onChange={handleChange}
            value={name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Номер</Form.Label>
          <Form.Control
            name="number"
            type="tel"
            placeholder="Номер телефона"
            onChange={handleChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Записать
        </Button>
      </Form>
    </div>
  );
}
