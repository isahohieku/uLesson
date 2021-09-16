import styled from 'styled-components';

interface Props {
    flexDirection?: string;
    alignItems?: string;
    justifyContent?: string;
}

export const FlexBox = styled.div<Props>`
    display: flex;
    flex-direction: ${(props) => props.flexDirection ? props.flexDirection : "row"};
    align-items:  ${(props) => props.alignItems ? props.alignItems : "flex-start"};
    justify-content:  ${(props) => props.justifyContent ? props.justifyContent : "flex-start"};
`;

