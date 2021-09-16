import { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import UCarousel from "@components/Carousel";
import { getPromotedLessons } from '@services/promoted-lessons';
import { Wrapper } from "./Wrapper";
import NothingHere from '@components/NothingHere';

const Home = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getLiveLessons = async () => {
            setLoading(true);
            try {
                const result = await getPromotedLessons();
                console.log('result', result);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        getLiveLessons();
    }, []);

    return (<Wrapper>
        <Container>
            <Row>
                <Col>
                    <h3 className="font-weight-bold">Live Lessons</h3>

                    <UCarousel />

                    <NothingHere
                        header="Oops! Try again later"
                        body="There are no live lessons for this subject at the moment"
                    />
                </Col>
            </Row>
        </Container>
    </Wrapper>);
};

export default Home;
