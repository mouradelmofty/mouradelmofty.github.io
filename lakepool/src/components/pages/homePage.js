import React, {Component} from 'react';
import {useTranslation} from 'react-i18next';
import i18n from '../../i18next';

function Message(){
  const [t, i18n] = useTranslation('common');
  return(
    t('home.message'))
}
class Homepage extends Component {
  render() {
    return (
      <div className="container-fluid">

      <p4><Message/></p4>



      </div>
    );
  }
}

export default Homepage;
