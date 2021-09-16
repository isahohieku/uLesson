import { Body, Header, NothingHereWrapper } from './styled';
import NothingImage from '@assets/svg/empty-promoted.svg';

interface Props {
    header: string;
    body: string;
}

const NothingHere = ({ header, body }: Props) => {
    return (
        <NothingHereWrapper>
            <NothingImage />
            <Header>{header}</Header>
            <Body>{body}</Body>
        </NothingHereWrapper>
    );
};

export default NothingHere;
