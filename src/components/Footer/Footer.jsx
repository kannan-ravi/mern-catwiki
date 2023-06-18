<<<<<<< HEAD
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

=======
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

>>>>>>> 92c55fd8f1475864a18e3f83a16ec8b87b37718a
export default Footer