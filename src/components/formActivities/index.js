import React, { Component } from 'react';

import { ContainerFromActivities, Input, Label } from './formActivitiesSC';
import { colors } from '../../resources/colorPalette';
import Button from '../../resources/button';

class FormActivities extends Component {
    constructor(props){
        super(props)
        this.handleSend = this.handleSend.bind(this);
    }
    handleSend(e){
        console.log(e)
        console.log("hola")
        
    }
    render() {
        return (
            <ContainerFromActivities>
                <Label htmlFor="Activiti">Actividad</Label>
                <Input type="text" id="Activiti" />
                <Label htmlFor="Date">Fecha de la Actividad</Label>
                <Input type="Date" id="Activiti" />
                <Button 
                    background={colors.Yellow} 
                    color={colors.White}
                    value="Enviar"
                    onClick={this.handleSend}

                />
            </ContainerFromActivities>
        );
    }
}


export default FormActivities;