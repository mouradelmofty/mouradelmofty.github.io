import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Assets/default.scss';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';

i18next.init({interpolation: {escapeValue: false},});

ReactDOM.render(<React.StrictMode>

  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
  </React.StrictMode>,document.getElementById('root'));
