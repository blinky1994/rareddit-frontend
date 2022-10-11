import logo from '../../assets/logo.svg'
import './navbar.styles.scss';
import Searchbox from '../searchbox/searchbox.components';
import ProfileIcon from '../profile-icon/profile-icon.components';
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div className='navbar-container'>
        
        <div className='navbar-left-section'>
          <Link to='/'>
          <img src={logo} className='site-logo' alt="logo" />
        </Link>
        </div>

        <div className='navbar-center-section'>
        <Searchbox />
        </div>

        <div className='navbar-right-section'>
          <ProfileIcon />
        </div>

      </div>
      <Outlet />
    </>
  )
}

export default NavBar