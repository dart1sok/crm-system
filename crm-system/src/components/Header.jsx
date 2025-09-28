function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">CRM Система</h1>
      </div>
      <div className="header-right">
        <div className="user-info">
          <div className="admin1">
            <div className="admin">Адміністратор</div>
            <div className="user-avatar">A</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
