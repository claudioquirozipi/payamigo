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

export const ButtonSC = styled.button`
    background: ${colors.Green};
    color: ${colors.White};
    padding: 20px 70px;
    border: none;
    border-radius: 4px;
`