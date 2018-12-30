import React, { Component } from 'react'
import { ButtonSC } from './buttonSC'


class Button extends Component {
  constructor(props){
    super(props)
    this.state = { 
      background: "red",
      width: 0,
      height: 0,
      posX: "25px",
      posY: "25px",
      opacity: 1,
      transition: " width 0s, height 0s, opacity 0s"
    }
    this.handlebutton = this.handlebutton.bind(this)
  }
 

  handlebutton(e){
    console.log(e.clientX, e.clientY, e.target.offsetTop, e.target.offsetLeft)
    let positionX = - e.target.offsetLeft + e.clientX;
    let positionY = - e.target.offsetTop + e.clientY;
    console.log(positionX, positionY)
    this.setState({
      posX: positionX + "px", posY: positionY + "px",
      width: "100vw", height: "100vw", opacity: 0, 
      transition: " width .7s, height .7s, opacity .7s"
    })
    setTimeout(()=> {
      this.setState({
        width: "0vw", height: "0vw", opacity: 1, transition: " width 0s, height 0s, opacity 0s"
      })
    }, 700)
    
  }

  render() {
    return (
        <ButtonSC 
            myStyle={this.state} 
            onClick={this.handlebutton}
            background={this.props.background}
            color={this.props.color}
        >
            {this.props.value}
        </ButtonSC>
    );
  }
}

export default Button;