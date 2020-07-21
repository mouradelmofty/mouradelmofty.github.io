import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import i18n from '../../i18next';

function Home(){
  const [t, i18n] = useTranslation('common');
  return(
    t('home.home'))
}

function About(){
  const [t, i18n] = useTranslation('common');
  return(
    t('home.about'))
}

function Reservation(){
  const [t, i18n] = useTranslation('common');
  return(
    t('home.reservation'))
}

function Gallery(){
  const [t, i18n] = useTranslation('common');
  return(
    t('home.gallery'))
}

function Membership(){
  const [t, i18n] = useTranslation('common');
  return(
    t('home.membership'))
}

class Header extends Component {
  render() {
    return (
      <header>

      <div className="logo">
      <p1><img src="logo.jpg" width="100" height="100"></img>Lake Pool</p1>
      </div>

      <nav>
        <ul>
          <li><Link to='/Home'><Home/></Link></li>
          <li><Link to='/About'><About/></Link></li>
          <li><Link to='/Reservation'><Reservation/></Link></li>
          <li><Link to='/Gallery'><Gallery/></Link></li>
          <li><Link to='/Memberships'><Membership/></Link></li>
        </ul>
      </nav>

      </header>
    );
  }
}

export default Header;
