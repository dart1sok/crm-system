function LeadList({ leads }) {
  return (
    <div className="list">
      <div className="list-header">
        <span>Ім'я</span>
        <span>Email</span>
        <span>Телефон</span>
        <span>Статус</span>
      </div>
      {leads.map((lead) => (
        <div key={lead.id} className="list-item">
          <span>{lead.name}</span>
          <span>{lead.email}</span>
          <span>{lead.phone}</span>
          <span>{lead.status}</span>
        </div>
      ))}
    </div>
  );
}

export default LeadList;
