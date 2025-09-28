import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { path: "/", label: "Дашборд", icon: "📊" },
    { path: "/leads", label: "Ліди", icon: "🎯" },
    { path: "/contacts", label: "Контакти", icon: "👥" },
    { path: "/deals", label: "Угоди", icon: "💰" },
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `nav-item ${isActive ? "nav-item-active" : ""}`
            }
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
