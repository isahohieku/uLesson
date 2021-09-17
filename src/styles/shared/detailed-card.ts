import styled from 'styled-components';

interface Props {
    color?: string;
}

export const HomeCard = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    overflow: hidden;
    background-color: #ffffff;
`;

export const CardMeta = styled.div`
    padding: 12px 20px;
    width: 60%;

    p:first-of-type {
        font-size: 12px;
        font-weight: 600;
    }

    p {
        color: #313848;
        opacity: 0.6;
        margin-bottom: 8px;
        line-height: 14px;
        font-size: 14px;
    }

    h5 {
        font-size: 16px;
        font-weight: 700;
        line-height: 21px;
    }
`;

export const LabelledIcon = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    p {
        margin-bottom: 0;
        margin-left: 10px;
    }
`;


export const LessonCard = styled.div`
    display: flex;
    border-radius: 10px;
`;
