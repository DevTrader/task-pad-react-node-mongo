import React, { PureComponent } from 'react';
import LandingPage from './components/landingPage/landingPage';
import ServerTest from './components/serverTest/serverTest';
import './App.css';

class App extends PureComponent {

  render() {
    return (
      <div className="App">
        {/* <LandingPage /> */}
        <ServerTest />
      </div>
    );
  }
}

export default App;
