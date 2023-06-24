import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };
  
    return (
        <div className='header'>
        <nav>
            {/* mobile */}
            <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
                <div onClick={openNav} className="mobile-navbar__close">
                    <i className="fa-solid fa-xmark"></i>
                </div>
            <ul className="mobile-navbar__links">
                <li>
                <Link onClick={openNav} to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link onClick={openNav} to='/vitae'>
                        Curriculum Vitae
                    </Link>
                </li>
            </ul>
          </div>
  
          {/* desktop */}
  
          <div className="navbar">
                <div>
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <h3>Webzel.dev</h3>
                    </Link>
                </div>
            <ul className="navbar__links">
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    {" "}
                        <Link to='/vitae'>
                            Curriculum Vitae
                        </Link>
                </li>
            </ul>
            {/* mobile */}
            <div className="mobile-hamb" onClick={openNav}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </nav>
      </div>
    );
  }

export default Header;