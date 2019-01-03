import React, { Component } from 'react';

import { ContainerFromActivities, Input, Label, Button } from './formActivitiesSC';


class FormActivities extends Component {
    constructor(props){
        super(props)
               
        this.ActivitiRef = React.createRef();
        this.DateRef = React.createRef();
        this.handleButton = this.handleButton.bind(this)
    }
    handleButton(e){
        e.preventDefault()
        const varActiviti = {
            activitiName: this.ActivitiRef.current.value,
            activitiDate: this.DateRef.current.value
        }
        
        this.props.handleSend(varActiviti)
    }
    render() {
        return (
            <ContainerFromActivities onSubmit={this.handleButton}>
                <Label htmlFor="Activiti">Actividad</Label>
                <Input type="text" id="Activiti" ref={this.ActivitiRef} />
                <Label htmlFor="Date">Fecha de la Actividad</Label>
                <Input type="Date" id="Activiti" ref={this.DateRef}/>
                <Button >
                    Enviar
                </Button>
            </ContainerFromActivities>
        );
    }
}


export default FormActivities;