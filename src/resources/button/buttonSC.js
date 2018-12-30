import styled from 'styled-components'



export const ButtonSC= styled.button`
    background: ${props => props.background};
    padding: 20px 75px;
    border-radius: 50px;    
    position: relative;
    overflow: hidden;
    border: none;
    box-shadow: 1px 1px 5px 2px rgba(0,0,0,.35), inset 1px 1px 4px 2px rgba(255,255,255,.3);
    color: ${props => props.color};
    font-weight: 700;
    font-size: 40px;
    outline: none;
    :active {
        transform: translate(5px,5px);
    }

    ::before {
        content: "";
        display: block;
        background: white;
        width: ${pros=> pros.myStyle.width};
        height: ${pros=> pros.myStyle.height};
        border-radius: 50%;
        position: absolute;
        top: ${pros=> pros.myStyle.posY};
        left: ${pros=> pros.myStyle.posX};
        transform: translate(-50%,-50%);
        /* transition:  width 1s, height 1s, opacity 2s; */
        transition: ${pros=> pros.myStyle.transition};
        opacity: ${pros=> pros.myStyle.opacity};
    }
`
