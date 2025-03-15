import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import RobotPage from './Components/RobotPage';
import RobotNavbar from './Components/RobotNavbar';
import RobotAuthentication from './Components/RobotAuthentication';
import RobotFooter from './Components/RobotFooter';

function App() {
  const browserLanguage = navigator.language || navigator.userLanguage;
  const titleStyle = { fontWeight: "bold" }

  return (
    <IntlProvider 
      locale={browserLanguage} 
      messages={browserLanguage.startsWith("es") ? localeEsMessages : localeEnMessages}
    >
      <BrowserRouter>
          <div className="App">
            <RobotNavbar titleStyle={titleStyle} />
            <Routes>
              <Route path="/" element={<RobotAuthentication titleStyle={titleStyle} />} />
              <Route path="/robots" element={<RobotPage />} />
           </Routes>
            <RobotFooter />
          </div>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
