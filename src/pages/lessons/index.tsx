import NothingHere from "@components/NothingHere";
import { Wrapper } from "@pages/home/styled";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import NothingImage from '@assets/svg/empty-lessons.svg';
import Calendar from '@assets/svg/calendar-white.svg';
import WeirdVector from '@assets/svg/weird-vector.svg';
import Timer from '@assets/svg/timer.svg';
import User from '@assets/svg/user.svg';
import HourGlass from '@assets/svg/hour-glass.svg';
import Arrow from '@assets/svg/arrow.svg';
import { FlexBox } from "@styles/shared/flexbox";
import React, { useEffect, useState } from 'react';
import { LessonStatusesIcons, lessonStatuses, lessonEngagementStatuses } from "@types";
import { LessonsCardGrid } from "@styles/shared/grids";
import { CardMeta, LabelledIcon, LessonCard } from "@styles/shared/detailed-card";
import { ImageCard } from "@styles/shared/image-card";
import { LessonStatus } from "@components/CarouselCard";
import { getRandomColor } from "@helpers/";
import { AddLiveButton } from "./styled";
import { getUserLessons } from "@services/lessons";
import { useStateValue } from "@context";
import getUserLessonsActions from "@context/actions/user_lessons";
import { hexColors } from "@styles/shared/colors";

const Lessons = () => {
    const [activeSection, setActiveSection] = useState('');
    const [userLessonsFallback, setUserLessonFallback] = useState([]);

    const { state: { userLessons, userLessonsLoading }, dispatch } = useStateValue();

    const {
        setUserLessonsLoading,
        setUserLessons,
        clearUserLessons
    } = getUserLessonsActions(dispatch);

    useEffect(() => {
        const getAllUserLessons = async () => {
            const usersLessons = await getUserLessons(
                setUserLessonsLoading,
                setUserLessons,
                clearUserLessons
            );

            setUserLessonFallback(usersLessons);
        };

        getAllUserLessons();
    }, []);

    return (<Wrapper>
        <Container>
            <Row>
                <Col>
                    <div className="d-flex align-items-center mb-5">
                        <a href="/" className="btn"><Arrow /></a>
                        <h3 className="font-weight-bold ml-3 mb-0">My Lessons</h3>
                    </div>

                    <div className="mt-5">
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


                            <AddLiveButton type="button"
                                className="btn btn-primary mt-3 mt-md-0 text-uppercase overflow-hidden font-weight-bold border-0 d-flex align-items-center px-5 space-letters-sm text-sm">
                                add live lessons
                                <span />
                                <WeirdVector />
                            </AddLiveButton>
                        </FlexBox>
                    </div>

                    <LessonsCardGrid columns={2} rowGap="40px" columnGap="30px" className="mt-5 pb-5">
                        {userLessonsFallback.map(({
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
                        }) => <LessonCard key={id}>
                                <ImageCard
                                    image={image_url}
                                    height="100px"
                                    width="40%"
                                    borderRadius="9px"
                                    size="sm">
                                    {status === lessonStatuses.upcoming && <LessonStatus color="dark" size="sm" className="lesson-status">
                                        <LessonStatusesIcons.Upcoming className="text-white" />
                                        <p className="text-white text-uppercase font-weight-bold mb-0 ml-1">{lessonStatuses[status]}</p>
                                    </LessonStatus>}
                                    {status === lessonStatuses.live && <LessonStatus color="red" size="sm" className="lesson-status">
                                        <LessonStatusesIcons.Live color="white" size="10px" className="text-white" />
                                        <p className="text-white text-uppercase font-weight-bold mb-0 ml-1">{lessonStatuses[status]}</p>
                                    </LessonStatus>}
                                    {status === lessonStatuses.replay && <LessonStatus color="orange" size="sm" className="lesson-status">
                                        <LessonStatusesIcons.Replay color={hexColors.white} size={4} className="text-white" />
                                        <p className="text-white text-uppercase font-weight-bold mb-0 ml-1">{lessonStatuses[status]}</p>
                                    </LessonStatus>}
                                </ImageCard>
                                <CardMeta className="pt-0">
                                    <p className={`text-${getRandomColor()}`}>{subject}</p>
                                    <h5>{topic}</h5>
                                    <LabelledIcon>
                                        {[lessonStatuses.live, lessonStatuses.upcoming].includes(status) && <Timer />}
                                        {status === lessonStatuses.replay && <HourGlass />}
                                        <p>{lessonEngagementStatuses[status]} at 1:30 PM</p>
                                    </LabelledIcon>
                                    <LabelledIcon>
                                        <User /> <p>{firstname} {lastname}</p>
                                    </LabelledIcon>
                                </CardMeta>
                            </LessonCard>)}
                    </LessonsCardGrid>
                    {/* No Record found */}
                    {(!userLessonsLoading && userLessonsFallback.length < 0) && <NothingHere
                        header="Oops! Nothing here"
                        body="Looks like you have not added a lesson for this subject"
                        NothingImage={NothingImage}
                    />}
                </Col>
            </Row>
        </Container>
    </Wrapper>);
};

export default Lessons;
