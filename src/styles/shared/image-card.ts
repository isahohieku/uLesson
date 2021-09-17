import styled from 'styled-components';

interface Props {
    image: string;
    size?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
}

export const ImageCard = styled.div<Props>`
    width: ${({ width }) => width ? width : '100%'};
    height: ${({ height }) => height ? height : 'auto'};
    background: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : '0'};
    overflow: ${({ borderRadius }) => borderRadius ? 'hidden' : 'visible'};

    .lesson-status {
        position: absolute;
        left: ${({ size }) => size === 'sm' ? '9px' : '20px'};
        bottom: ${({ size }) => size === 'sm' ? '5px' : '20px'};
    }

    @media(max-width:800px) {
        p {
            font-size: 12px
        }
    }
`;
