export function Header() {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar column-full">
            <span>Code Journal</span>
            <a href="#" data-view="entries" className="nav-item">
              Entries
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
