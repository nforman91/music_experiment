import React from 'react';
import styled from 'styled-components';
import MusicPlayer from './MusicPlayer';

const Music = () => {
    return (
        <StyledMusic>
            <MusicPlayer/>
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
