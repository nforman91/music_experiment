import React from 'react';
import styled from 'styled-components';

const Content = ({children}) => {
    return (
        <StyledContent>
            {children}
        </StyledContent>
    )
}

const StyledContent = styled.div`
    width: calc(100% - 20px);
    padding: 20px;
    background: black;
`;

export default Content;
