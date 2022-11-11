import React from 'react';
import styled from 'styled-components';

const Topbar = ({ children }) => {
    return (
        <StyledTopbar>
            {children}
        </StyledTopbar>
    )
}

const StyledTopbar = styled.div`
    position: absolute;
    top: 0;
    left: 200px;
    width: calc(100% - 200px);
    height: 50px;
    background: black;
    padding: 20px;
`;

export default Topbar;
