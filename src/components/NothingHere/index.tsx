import { Body, Header, NothingHereWrapper } from './styled';

interface Props {
    header: string;
    body: string;
    NothingImage: any;
}

const NothingHere = ({ header, body, NothingImage }: Props) => {
    console.log(typeof NothingImage);
    return (
        <NothingHereWrapper>
            <NothingImage />
            <Header>{header}</Header>
            <Body>{body}</Body>
        </NothingHereWrapper>
    );
};

export default NothingHere;
