import React from 'react';
import './App.css';
import { IntlProvider } from 'react-intl';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RobotPage from './Components/RobotPage';
import RobotNavbar from './Components/RobotNavbar';
import RobotAuthentication from './Components/RobotAuthentication';
import RobotFooter from './Components/RobotFooter';

function App() {
  return (
    <IntlProvider locale='en' messages={{}}>
      <BrowserRouter>
          <div className="App">
            <RobotNavbar />
            <Routes>
              <Route path="/" element={<RobotAuthentication />} />
              <Route path="/robots" element={<RobotPage />} />
           </Routes>
            <RobotFooter />
          </div>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
