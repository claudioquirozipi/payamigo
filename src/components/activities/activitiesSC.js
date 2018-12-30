import styled from 'styled-components';
import {colors , shadow } from '../../resources/colorPalette'

export const ContainerActivities = styled.div`
    background: ${colors.BlueD};
    color: ${colors.White};
    box-shadow: ${shadow};
    padding: 30px 50px;
    border-radius: 5px;
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`