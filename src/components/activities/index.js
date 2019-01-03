import React, { Component } from 'react';
import { ContainerActivities } from './activitiesSC'
class Activities extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        
        
        return (
            <ContainerActivities>
                <ul>
                
                    {this.props.activiti.map((activiti)=>{
                        return <li>{activiti.activitiName}</li>
                    })}
                
                    <li>hola</li>
                </ul>
            </ContainerActivities>
        );
    }
}

export default Activities;