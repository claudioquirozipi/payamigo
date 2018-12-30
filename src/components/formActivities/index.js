import React, { Component } from 'react';

import { ContainerFromActivities } from './formActivitiesSC';
import { colors } from '../../resources/colorPalette';
import Button from '../../resources/button';

class FormActivities extends Component {
    constructor(props){
        super(props)
        this.handleSend = this.handleSend.bind(this);
    }
    handleSend(e){
        console.log(e)
        e.preventDefault();
    }
    render() {
        return (
            <ContainerFromActivities>
                <label htmlFor="Activiti">Actividad</label>
                <input type="text" id="Activiti" />
                <label htmlFor="Date">Fecha de la Actividad</label>
                <input type="Date" id="Activiti" />
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