// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

// NAVBAR COMPONENTS
// navbar base
export function NavBarSection() {
    return (
      <section className="nav">
        <NavMenuShort />
        <NavMenuLong />
      </section>
    )
  }
  // short navbar
  function NavMenuShort() {
    return (
      <div className="hamburger-menu">
      </div>
    )
  }
  // long navbar
  function NavMenuLong() {
    return (
      <div className="page-menu">
          <NavLinks />
      </div>
    )
  }
  // links for the long navbar
  function NavLinks() {
    return (
      <ul>
        <h2 className="name">Simon Chow</h2>
        {/* <li><h2 className="name">Simon Chow</h2></li> */}
        {/* <li>
          <NavLink to="/home" isActive={(match, location) => {
            if (location.pathname === "/home" | location.pathname === "/gameplay") {
              return true;
            } else {
              return false;
            }
          }} activeClassName="activeNavLink">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/experience" activeClassName="activeNavLink">Experience</NavLink>
        </li>
        <li>
          <NavLink exact to="/projects" activeClassName="activeNavLink">Projects</NavLink>
        </li> */}
    </ul>
    )
  }