import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import defaultImg from '../img/room-1.jpeg';

const StyleHero = styled.header`
    min-height: 60vh;
    background: url(${props => props.img ? props.img : defaultImg}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default StyleHero;