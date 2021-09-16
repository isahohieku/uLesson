import { useEffect, useState } from 'react';
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import UCarousel from "@components/Carousel";
import { getPromotedLessons } from '@services/promoted-lessons';
import { Wrapper } from "./styled";
import NothingHere from '@components/NothingHere';
import { FlexBox } from '@styles/shared/flexbox';
import Calendar from '@assets/svg/calendar-white.svg';
import Timer from '@assets/svg/timer.svg';
import User from '@assets/svg/user.svg';
import HourGlass from '@assets/svg/hour-glass.svg';
import NothingImage from '@assets/svg/empty-promoted.svg';
import axios from 'axios';
import { LessonsCardGrid } from '@styles/shared/grids';
import { HomeCard, CardMeta, LabelledIcon } from '@styles/shared/detailed-card';
import { ImageCard } from '@styles/shared/image-card';
import { colors, lessonStatuses, LessonStatusesIcons } from '@types';
import { getRandomNumber } from '@helpers';
import { LessonStatus } from '@components/CarouselCard';
import { getRandomColor } from '@helpers/';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    useEffect(() => {
        const getLiveLessons = async () => {
            setLoading(true);
            try {
                const result = await axios.get('https://mock-live-lessons.herokuapp.com/api/v1/promoted');
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
                <Col className="pb-5">
                    <h3 className="font-weight-bold mb-5">Live Lessons</h3>

                    {/* Carousel */}
                    <UCarousel />

                    <div className="mt-5 pt-5">
                        <FlexBox justifyContent="space-between" alignItems="center">
                            <Dropdown className="border-0">
                                <Dropdown.Toggle className="space-letters-sm text-sm">
                                    {activeSection || 'All Subjects'}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setActiveSection('All Subjects')}>All Subjects</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setActiveSection('English')}>English</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setActiveSection('Mathematics')}>Mathematics</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <a href="/lessons"
                                className="btn btn-primary text-uppercase border-0 d-flex align-items-center space-letters-sm text-sm">
                                <Calendar className="mr-2" /> view my lessons
                            </a>
                        </FlexBox>
                    </div>

                    {/* No Record found */}
                    {/* <NothingHere
                        NothingImage={NothingImage}
                        header="Oops! Try again later"
                        body="There are no live lessons for this subject at the moment"
                    /> */}

                    <LessonsCardGrid columns={3} rowGap="40px" columnGap="30px" className="mt-3">
                        <HomeCard>
                            <ImageCard
                                image="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
                                height="160px">
                                <LessonStatus color="dark" className="lesson-status">
                                    <LessonStatusesIcons.Upcoming className="text-white" />
                                    <p className="text-white text-uppercase font-weight-bold mb-0 ml-1">{lessonStatuses.upcoming}</p>
                                </LessonStatus>
                            </ImageCard>

                            <CardMeta>
                                <p className={`text-${getRandomColor()}`}>Physics</p>
                                <h5>Materials - Metallic & Non Metallic Properties</h5>
                                <LabelledIcon>
                                    <Timer /> <p>Started at 1:30 PM</p>
                                </LabelledIcon>
                                <LabelledIcon>
                                    <User /> <p>Gabriella Adeboye</p>
                                </LabelledIcon>
                            </CardMeta>
                        </HomeCard>
                        <HomeCard>
                            <ImageCard
                                image="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
                                height="160px" />
                        </HomeCard>
                        <HomeCard>
                            <ImageCard
                                image="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
                                height="160px" />
                        </HomeCard>
                        <HomeCard>
                            <ImageCard
                                image="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
                                height="160px" />
                        </HomeCard>
                    </LessonsCardGrid>
                </Col>
            </Row>
        </Container>
    </Wrapper>);
};

export default Home;
