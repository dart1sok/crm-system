import { useState } from "react";

function Deals() {
  const [deals] = useState([
    {
      id: 1,
      name: "Веб-сайт для компанії",
      value: 50000,
      status: "в роботі",
      client: "Іван Іванов",
    },
    {
      id: 2,
      name: "Рекламна компанія",
      value: 25000,
      status: "закрито",
      client: "Марія Петренко",
    },
  ]);

  return (
    <div className="page">
      <div className="page-header">
        <h1>Угоди</h1>
        <button className="btn-primary">➕ Додати</button>
      </div>

      <div className="list">
        {deals.map((deal) => (
          <div key={deal.id} className="list-item">
            <div>
              <strong>{deal.name}</strong>
              <p>👤 {deal.client}</p>
            </div>
            <div>
              <p>💰 {deal.value} грн</p>
              <p>📊 {deal.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deals;
