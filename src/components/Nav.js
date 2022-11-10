import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
    return (
        <StyledNav>
            <Link id="home" to="/">
                Home
            </Link>
            <Link id="music" to="/music">
                Music
            </Link>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    min-height: 1rem;
    margin-top: 2rem;
    margin-left: 2rem;
`;

export default Nav;
