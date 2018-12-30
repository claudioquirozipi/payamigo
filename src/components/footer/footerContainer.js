import {colors, shadow} from '../../resources/colorPalette';
import styled from 'styled-components';

export const FooterContainer = styled.div`
    background: ${colors.BlueD};
    color: ${colors.White};
    box-shadow: ${shadow};
    padding: 40px 0; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`