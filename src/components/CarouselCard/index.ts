import { hexColors } from "@styles/shared/colors";
import styled from "styled-components";

interface Props {
    image: string;
}

interface ColorProps {
    color: string;
}

interface CircleProps extends ColorProps {
    size: string;
}

interface StatusProps extends ColorProps {
    size?: string;
}

interface PlayProps extends ColorProps {
    size: number;
}

export const CarouselCard = styled.div<Props>`
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const CarouselCardMeta = styled.div`
    position: absolute;
    bottom: 25px;
    left: 40px;

    h5 {
        font-size: 18px;
    }

    svg {
        path, circle {
            stroke: white !important;
        }
    }

    span {
        height: 8px;
        width: 8px;
        border-radius: 50%;
    }

    @media(max-width:800px) {
        h5 {
            font-size: 14px;
        }
        svg {
            path, circle {
                stroke: white !important;
            }
        }

        span {
            height: 4px;
            width: 4px;
            border-radius: 50%;
        }
    }
`;

export const PlayIcon = styled.div<PlayProps>`
    width: 0;
    height: 0;
    border-top: ${({ size }) => `${size}px`} solid transparent;
    border-left: ${({ size }) => `${2 * size}px`} solid ${({ color }) => hexColors[color]};
    border-bottom: ${({ size }) => `${size}px`} solid transparent;
`;

export const LiveIcon = styled.div<CircleProps>`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    background-color: ${({ color }) => hexColors[color]};
    border-radius: 50%;
`;

export const LessonStatus = styled.div<StatusProps>`
    display: inline-flex;
    align-items: center;
    background: ${({ color }) => hexColors[color]};
    border-radius: 5px;
    padding: ${({ size }) => size === 'sm' ? '3px 5px' : '4px 8px'};
    font-size: ${({ size }) => size === 'sm' ? '9px' : ''};
`;
