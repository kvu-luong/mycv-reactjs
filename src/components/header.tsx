function Header() {
  return (
    <header>
      <div className="container">
        <div className="top-color"></div>
        <div className="top-icons">
          <ul>
            <li>
              <a href="#true">
                <i className="fas fa-file-download"></i>
                <span className="btn-hide-text">DOWNLOAD MY RESUME</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
