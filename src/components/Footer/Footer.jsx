import './Footer.css';
import Logo from '../../assets/CatwikiLogo.svg';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer--container'>
      <Link to={'/'}><img src={Logo} alt='' className='footer--image' /></Link>
      <p className='footer--text'>&#169; created by <span><a href="https://github.com/kannan-ravi?tab=repositories">kannan-ravi</a></span> - devChallenge.io 2023</p>
    </footer>
  )
}

export default Footer