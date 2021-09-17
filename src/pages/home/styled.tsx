import styled from 'styled-components';

interface Props {
    backgroundImage: any;
    position: string;
}

export const Wrapper = styled.div<Props>`
    width: 100%;
    background: ${(({ backgroundImage }) => `url(${backgroundImage})`)};
    right: 0;
    top: 0;
    background-repeat: no-repeat;
    background-position: ${(({ position }) => position)};
    min-height: 100vh;
    padding-top: 100px;
    background-attachment: fixed;

    @media(max-width:850px) {
        padding-top: 30px;
        background-size: 70%;
    }
`;
