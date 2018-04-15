import React, { PureComponent } from 'react';
import LandingPage from './components/landingPage/landingPage'
import './App.css';

class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
