import { useState } from "react";

function Contacts() {
  const [contacts] = useState([
    {
      id: 1,
      name: "Іван Іванов",
      email: "ivan@example.com",
      phone: "+38 (099) 123-45-67",
      company: 'ТОВ "Рога і копита"',
    },
    {
      id: 2,
      name: "Марія Петренко",
      email: "maria@company.ua",
      phone: "+38 (067) 234-56-78",
      company: 'ПП "Соняшник"',
    },
  ]);

  return (
    <div className="page">
      <div className="page-header">
        <h1>Контакти</h1>
        <button className="btn-primary">➕ Додати</button>
      </div>

      <div className="list">
        {contacts.map((contact) => (
          <div key={contact.id} className="list-item">
            <div>
              <strong>{contact.name}</strong>
              <p>{contact.company}</p>
            </div>
            <div>
              <p>📧 {contact.email}</p>
              <p>📞 {contact.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacts;
