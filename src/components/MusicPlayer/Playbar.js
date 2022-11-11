import React from 'react';
import styled from 'styled-components';

const Playbar = ({children}) => {
    return (
        <StyledPlaybar>
            {children}
        </StyledPlaybar>
    )
}

const StyledPlaybar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 75px;
    background: black;
    z-index: 99;
    padding: 20px;
`;

export default Playbar;
