import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
    background-color: ${primaryColor};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    a {
        color: white;
        text-decoration: none;
        margin: 0 10px;
    }
`;