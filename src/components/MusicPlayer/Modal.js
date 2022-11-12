import React from 'react';
import styled from 'styled-components';

const Modal = ({children}) => {
    return (
        <StyledModal>
            {children}
        </StyledModal>
    )
}

const StyledModal = styled.div`
    width: calc(100% - 20px);
    padding: 20px;
    background: black;
`;

export default Modal;
