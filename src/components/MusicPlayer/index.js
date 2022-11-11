import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Playbar from './Playbar';

const MusicPlayer = () => {
    return (
        <StyledMusicPlayer>
            <Topbar/>
            <Sidebar/>
            <Content/>
            <Playbar/>
        </StyledMusicPlayer>
    )
}

const StyledMusicPlayer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    position: relative;
    color: white;
`;

export default MusicPlayer;
