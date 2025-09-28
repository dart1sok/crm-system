import { useState } from "react";

function LeadForm({ onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "new",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      status: "new",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Додати нового ліда</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Ім'я:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Телефон:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Статус:</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="new">Новий</option>
              <option value="contacted">На зв'язку</option>
              <option value="qualified">Кваліфікований</option>
            </select>
          </div>

          <div className="form-actions">
            <button className="btn-primary" type="button" onClick={onCancel}>
              Скасувати
            </button>
            <button type="submit" className="btn-primary">
              Зберегти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LeadForm;
