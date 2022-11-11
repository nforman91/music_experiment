import React from 'react';
import styled from 'styled-components';

const Sidebar = ({ children }) => {
    return (
        <StyledSidebar>
            {children}
        </StyledSidebar>
    )
}

const StyledSidebar = styled.div`
    width: 200px;
    height: 100%;
    background-color: black;
    padding: 20px;
`;

export default Sidebar;
