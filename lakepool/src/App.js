import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import i18n from './i18next';

//components
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import Homepage from './components/pages/homePage';
import About from './components/pages/about';
import Reservation from './components/pages/reservation';
import Gallery from './components/pages/gallery';
import Memberships from './components/pages/memberships';

function FooterComponent(){
  const  [t, i18n] = useTranslation('common');
  return <div5>

        <br />
        <button2 onClick={() => i18n.changeLanguage('fr')}>fr</button2>
        &nbsp;
        <button2 onClick={() => i18n.changeLanguage('en')}>en</button2>
        </div5>
}

class App extends Component {
  render() {
    return (

        <Router>
          <div className="App">
          <Header />
            <Route exact path='/' component={Homepage} />
            <Route exact path='/Home' component={Homepage} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Reservation' component={Reservation} />
            <Route exact path='/Gallery' component={Gallery} />
            <Route exact path='/Memberships' component={Memberships} />

          <Footer />
          <FooterComponent/>
          </div>
        </Router>

    );
  }

}

export default App;
