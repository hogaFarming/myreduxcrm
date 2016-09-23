import React, {Component} from 'react';

import Header from '../../components/Header';
import Nav from '../../components/Nav';

class App extends Component {
  componentWillMount() {
    if (!sessionStorage.getItem('session_key')) {
      location.href = '/login.html';
    }
  }
  render() {
    const { location, children } = this.props;
    return (
      <div className="app">
        <Header />
        <Nav location={location} />
        <div className="app-main">
          {children}
        </div>
      </div>
    );
  }
}

export default App;