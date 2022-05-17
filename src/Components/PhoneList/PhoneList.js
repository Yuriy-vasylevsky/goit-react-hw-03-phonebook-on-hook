import './PhoneList.css';
import Button from 'react-bootstrap/Button';

export default function PhoneList({ contacts, del }) {
  return (
    <div className="phoneList">
      <ul className="list">
        {contacts.map(item => {
          return (
            <li key={item.id} className="item">
              {item.name} : {item.number}
              <Button
                className="btn-my"
                onClick={() => del(item.id)}
                variant="primary"
              >
                Удалить
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
