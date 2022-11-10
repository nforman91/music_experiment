import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
        <StyledHome>
            <h1>Home</h1>
        </StyledHome>
    )
}

const StyledHome = styled.div`
    h1{
        font-size: 5rem;
        margin-left: 2rem;
    }
`;

export default Home;
