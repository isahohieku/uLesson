import styled from 'styled-components';

interface Props {
    columns?: number;
    rowGap?: string;
    columnGap?: string;
}

export const LessonsCardGrid = styled.div<Props>`
    display: grid;
    grid-template-columns: ${(props) => `repeat(${props.columns}, minmax(0, 1fr))`};
    row-gap: ${(props) => props.rowGap};
    column-gap: ${(props) => props.columnGap};
`;
