import profileIcon from '../../assets/profile-icon.svg'
import './profile-icon.styles.scss';

const ProfileIcon = () => {
  return (
    <div>
        <img src={profileIcon} className='profile-icon' alt="logo" />
    </div>
  )
}

export default ProfileIcon