import React from 'react';
import './App.css';
import { IntlProvider } from 'react-intl';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RobotPage from './Components/RobotPage';
import RobotNavbar from './Components/RobotNavbar';
import RobotAuthentication from './Components/RobotAuthentication';
import RobotFooter from './Components/RobotFooter';

function App() {

  const titleStyle = { fontWeight: "bold" }

  return (
    <IntlProvider locale='en' messages={{}}>
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
