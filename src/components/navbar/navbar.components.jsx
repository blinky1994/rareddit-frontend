import logo from '../../assets/logo.svg'
import './navbar.styles.scss';
import Searchbox from '../searchbox/searchbox.components';
import ProfileIcon from '../profile-icon/profile-icon.components';

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-left-section'>
          <img src={logo} className='site-logo' alt="logo" />
         </div>
         <div className='navbar-center-section'>
             <Searchbox />
         </div>
         <div className='navbar-right-section'>
            <ProfileIcon />
         </div>

    </div>
  )
}

export default NavBar