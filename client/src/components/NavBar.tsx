interface Props {
  openSideBar: () => void;
  isCollapse: boolean;
}

const NavBar = ({ openSideBar, isCollapse }: Props) => {
  let collapse = isCollapse ? 'collapse' : '';
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            Navbar
          </a>
          <button
            className='navbar-toggler'
            type='button'
            onClick={openSideBar}
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className={`${collapse} navbar-collapse`} id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Games
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  APIs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
