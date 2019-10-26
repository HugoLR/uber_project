import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <div className='Header'>
    <Link className='linkDecoration' to='/'>
      <h1>FREE TAXI</h1>
    </Link>
  </div>
);
export default Header;
