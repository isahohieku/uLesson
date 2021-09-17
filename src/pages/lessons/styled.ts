import styled from "styled-components";


export const AddLiveButton = styled.button`
    position: relative;

    svg:last-of-type {
        position: absolute;
        right: 0;
    }

    span {
        width: 100px;
        height: 100px;
        position: absolute;
        background-color: #68BC98;
        border-radius: 50%;
        bottom: 15px;
        left: -60px;
    }
`;
