import {colors, shadow} from '../resources/colorPalette';

import styled from 'styled-components';

export const Header = styled.header`
    font-weight: 700;
    font-size: 40px;
    padding: 40px 0; 
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color : ${colors.White};
    background: ${colors.BlueD};
    box-shadow: ${shadow};
`