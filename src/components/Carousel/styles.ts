import styled from "styled-components";

interface ButtonProps {
    placement?: string;
}

export const NavButton = styled.div<ButtonProps>`
    background: #ffffff;
    box-shadow: 0px 7px 20px rgba(49, 56, 72, 0.14);
    height: 56px;
    width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    cursor: pointer;
    transform: translateY(-50%) ${(props) => props.placement === 'left' ? 'rotate(180deg)' : ''};
    left: ${(props) => props.placement === 'left' ? '35px' : '' };
    right: ${(props) => props.placement === 'right' ? '35px' : '' };

    @media(max-width:800px) {
        display: none;
    }
`;
