import { useState } from "react";
import LeadList from "../components/LeadList";
import LeadForm from "../components/LeadForm";

function Leads() {
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: "Іван Іванов",
      email: "ivan@example.com",
      phone: "+38 (099) 123-45-67",
      status: "new",
      createdAt: "2023-10-01",
    },
  ]);
  const [showForm, setShowForm] = useState(false);

  const addLead = (lead) => {
    const newLead = {
      ...lead,
      id: Date.now(),
      createdAt: new Date().toISOString().split("T")[0],
    };
    setLeads([...leads, newLead]);
    setShowForm(false);
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="control-lead">Управління лідами</h1>
        <button className="btn-primary" onClick={() => setShowForm(true)}>
          Додати ліда
        </button>
      </div>

      {showForm && (
        <LeadForm onSave={addLead} onCancel={() => setShowForm(false)} />
      )}

      <LeadList leads={leads} />
    </div>
  );
}

export default Leads;
