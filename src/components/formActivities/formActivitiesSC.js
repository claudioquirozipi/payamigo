import styled from 'styled-components';
import { colors, shadow } from '../../resources/colorPalette';

export const ContainerFromActivities = styled.form`
    background: ${colors.BlueD};
    box-shadow: ${shadow};
    padding: 30px 50px;
    border-radius: 5px;
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`
export const Input = styled.input`
    background: ${colors.White};
    margin: 10px 0 40px;
    padding: 5px;
    border-radius: 5px;
    color: ${colors.Green};
    :focus{
        outline: 2px solid ${colors.Yellow};
    }

`
export const Label = styled.label`
    color: ${colors.White};
`
export const Button = styled.button`
    background: ${colors.Yellow};
    padding: 20px 75px;
    border-radius: 5px;    
    border: none;
    box-shadow: 1px 1px 5px 2px rgba(0,0,0,.35), inset 1px 1px 4px 2px rgba(255,255,255,.3);
    color: ${colors.White};
    font-weight: 700;
    font-size: 40px;
    outline: none;
    :active {
        transform: translate(5px,5px);
    }
`