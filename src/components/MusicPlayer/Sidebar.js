import React, { useState } from 'react';
import styled from 'styled-components';

const Sidebar = ({ children }) => {
    const [selected, setSelected] = useState({
        currentPlaylist: 'home',
        playlists: {
            home: null,
            favorites: null
        }
    });

    const playlists = Object.keys(selected.playlists)

    return (
        <StyledSidebar>
            <ul>
                <li className="library">Library</li>
                {
                    playlists.map(list => (
                    <li key={list} className={list === selected.currentPlaylist ? 'active' : ''}
                    onClick={() => {
                        setSelected({...selected, currentPlaylist: list})
                    }}
                    >{list}</li>))
                }
                <li className="new-playlist">
                    <span>New Playlist</span>
                </li>
            </ul>
        </StyledSidebar>
    )
}

const StyledSidebar = styled.div`
    width: 200px;
    height: 100%;
    background-color: black;
    padding-top: 20px;
    li{
        padding-left: 20px;
        text-transform: capitalize;
        margin-bottom: 10px;
        cursor: pointer;
        font-weight: bold;
    }
    li.active{
        border-left: 2px solid white;
        padding-left: 18px;
    }
    li.library{
        cursor: unset;
        color: #999;
        text-transform: uppercase;
        font-weight: normal;
    }
    li.new-playlist{
        position: absolute;
        bottom: 80px;
        span{
            color: #999;
            font-weight: normal;
        }
    }
`;

export default Sidebar;
