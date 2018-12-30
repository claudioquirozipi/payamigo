import React, { Component } from 'react';
import {Header} from './components/header';
import Activities from './components/activities';
import FormActivities from './components/formActivities';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header>Administrador de Actividades.</Header>
        <FormActivities />
        <Activities />
        <Footer />
      </div>
    );
  }
}

export default App;
