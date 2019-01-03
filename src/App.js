import React, { Component } from 'react';
import {Header} from './components/header';
import Activities from './components/activities';
import FormActivities from './components/formActivities';
import Footer from './components/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activiti: [
        {activitiName: "salir a pacear",
        activitiDate: "30/12/2018"},
        {activitiName: "salir a Comer",
        activitiDate: "30/12/2018"}
      ]
    }
    this.handleSend = this.handleSend.bind(this);
  }
  handleSend(varActiviti){
    this.setState(()=>{
      this.state.activiti.push(varActiviti)    
    })
  }
  render() {
    return (
      <div>
        <Header>Administrador de Actividades.</Header>
        <FormActivities handleSend={this.handleSend}/>
        <Activities activiti={this.state.activiti}/>
        <Footer />
      </div>
    );
  }
}

export default App;
