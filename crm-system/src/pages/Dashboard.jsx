import { useState, useEffect } from "react";

function Dashboard() {
  const [stats, setStats] = useState({
    totalLeads: 0,
    totalContacts: 0,
    totalDeals: 0,
  });

  useEffect(() => {
    setStats({
      totalLeads: 154,
      totalContacts: 89,
      totalDeals: 23,
    });
  }, []);

  return (
    <div className="dashboard">
      <h1>Дашборд</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Всього лідів</h3>
          <div className="stat-number">{stats.totalLeads}</div>
        </div>
        <div className="stat-card">
          <h3>Контакти</h3>
          <div className="stat-number">{stats.totalContacts}</div>
        </div>
        <div className="stat-card">
          <h3>Угоди</h3>
          <div className="stat-number">{stats.totalDeals}</div>
        </div>
      </div>

      <div className="recent-activities">
        <h2>Останні активності</h2>
        <div className="activities-list">
          <div className="activity-item">
            <span className="lead">Новий лід: Іван Іванов (2 години тому)</span>
          </div>
          <div className="activity-item">
            <span className="team">
              Угоду закрито: Проект "Альфа" (5 годин тому)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
