import React from 'react';
import styled from 'styled-components';

const Music = () => {
    return (
        <StyledMusic>
            <h1>Music</h1>
        </StyledMusic>
    )
}

const StyledMusic = styled.div`
    h1{
        font-size: 5rem;
        margin-left: 2rem;
    }
`;

export default Music;
