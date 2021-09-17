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
import { LessonsCardGrid } from '@styles/shared/grids';
import { HomeCard, CardMeta, LabelledIcon } from '@styles/shared/detailed-card';
import { ImageCard } from '@styles/shared/image-card';
import { colors, lessonStatuses, LessonStatusesIcons } from '@types';
import { LessonStatus } from '@components/CarouselCard';
import { getRandomColor } from '@helpers';
import { useStateValue } from '@context';
import getPromotedLessonsActions from '@context/actions/promoted_lessons';
import getAllLessonsActions from '@context/actions/all_lessons';
import { getAllLessons } from '@services/lessons';
import { hexColors } from '@styles/shared/colors';

const Home = () => {
    const [activeSection, setActiveSection] = useState('');

    const { state: {
        promotedLessons,
        allLessons,
        promotedLessonsLoading,
        allLessonsLoading
    }, dispatch } = useStateValue();

    const {
        setPromotedLessonsLoading,
        setPromotedLessons,
        clearPromotedLessons
    } = getPromotedLessonsActions(dispatch);

    const {
        setAllLessonsLoading,
        setAllLessons,
        clearAllLessons
    } = getAllLessonsActions(dispatch);

    useEffect(() => {
        const getAllPromotedLessons = async () => {
            await getPromotedLessons(
                setPromotedLessonsLoading,
                setPromotedLessons,
                clearPromotedLessons
            );
        };

        const getAllULessons = async () => {
            await getAllLessons(
                setAllLessonsLoading,
                setAllLessons,
                clearAllLessons
            );
        };

        getAllPromotedLessons();
        getAllULessons();
    }, []);

    // console.log('allLessons)', allLessons);
    // console.log('state', promotedLessonsLoading);

    return (<Wrapper>

        <Container>
            <Row>
                <Col className="pb-5">
                    <h3 className="font-weight-bold mb-5">Live Lessons</h3>

                    {/* Carousel */}
                    {(!promotedLessonsLoading && promotedLessons.length > 0)
                        && <UCarousel data={promotedLessons} />}

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
                    {(!allLessonsLoading && allLessons.length < 0) && <NothingHere
                        NothingImage={NothingImage}
                        header="Oops! Try again later"
                        body="There are no live lessons for this subject at the moment"
                    />}

                    <LessonsCardGrid columns={3} rowGap="40px" columnGap="30px" className="mt-3">
                        {allLessons.map(({
                            id,
                            image_url,
                            subject: {
                                name: subject
                            },
                            topic,
                            status,
                            tutor: {
                                firstname,
                                lastname
                            }
                        }) => <HomeCard key={id}>
                                <ImageCard
                                    image={image_url}
                                    height="160px">
                                    <LessonStatus color="dark" className="lesson-status">
                                        {status === lessonStatuses.upcoming && <LessonStatusesIcons.Upcoming className="text-white" />}
                                        {status === lessonStatuses.live && <LessonStatusesIcons.Live
                                            color={hexColors.white} size="10px" className="text-white" />}
                                        {status === lessonStatuses.replay && <LessonStatusesIcons.Replay
                                            color={hexColors.white} size={9} className="text-white" />}
                                        {status === lessonStatuses.upcoming && <LessonStatusesIcons.Upcoming className="text-white" />}
                                        <p className="text-white text-uppercase font-weight-bold mb-0 ml-1">{lessonStatuses[status]}</p>
                                    </LessonStatus>
                                </ImageCard>

                                <CardMeta>
                                    <p className={`text-${getRandomColor()}`}>{subject}</p>
                                    <h5>{topic}</h5>
                                    <LabelledIcon>
                                        <Timer /> <p>Started at 1:30 PM</p>
                                    </LabelledIcon>
                                    <LabelledIcon>
                                        <User /> <p>{firstname} {lastname}</p>
                                    </LabelledIcon>
                                </CardMeta>
                            </HomeCard>)}
                    </LessonsCardGrid>
                </Col>
            </Row>
        </Container>
    </Wrapper>);
};

export default Home;
