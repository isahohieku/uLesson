import NothingHere from "@components/NothingHere";
import { Wrapper } from "@pages/home/styled";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import NothingImage from '@assets/svg/empty-lessons.svg';
import Calendar from '@assets/svg/calendar-white.svg';
import Timer from '@assets/svg/timer.svg';
import User from '@assets/svg/user.svg';
import HourGlass from '@assets/svg/hour-glass.svg';
import Arrow from '@assets/svg/arrow.svg';
import { FlexBox } from "@styles/shared/flexbox";
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LessonStatusesIcons, lessonStatuses } from "@types";
import axios from "axios";
import { LessonsCardGrid } from "@styles/shared/grids";
import { CardMeta, LabelledIcon, LessonCard } from "@styles/shared/detailed-card";
import { ImageCard } from "@styles/shared/image-card";
import { LessonStatus } from "@components/CarouselCard";
import { getRandomColor } from "@helpers/";

const Lessons = () => {
    const history = useHistory();
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
                <Col>

                    <div className="d-flex align-items-center mb-5">
                        <button type="button" className="btn" onClick={() => history.goBack()}><Arrow /></button>
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

                            <button type="button"
                                className="btn btn-primary text-uppercase font-weight-bold border-0 d-flex align-items-center px-5 space-letters-sm text-sm">
                                add live lessons
                            </button>
                        </FlexBox>
                    </div>

                    <LessonsCardGrid columns={2} rowGap="40px" columnGap="30px" className="mt-5">
                        <LessonCard>
                            <ImageCard
                                image="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
                                height="100px"
                                width="40%"
                                borderRadius="9px"
                                size="sm">
                                <LessonStatus color="orange" size="sm" className="mb-1 lesson-status">
                                    <LessonStatusesIcons.Replay color="white" size={4} className="text-white" />
                                    <p className="text-white text-uppercase font-weight-bold mb-0 ml-1">{lessonStatuses.replay}</p>
                                </LessonStatus>
                            </ImageCard>
                            <CardMeta className="pt-0">
                                <p className={`text-${getRandomColor()}`}>Physics</p>
                                <h5>Materials - Metallic & Non Metallic Properties</h5>
                                <LabelledIcon>
                                    <Timer /> <p>Started at 1:30 PM</p>
                                </LabelledIcon>
                                <LabelledIcon>
                                    <User /> <p>Gabriella Adeboye</p>
                                </LabelledIcon>
                            </CardMeta>
                        </LessonCard>
                        <LessonCard>
                            <ImageCard
                                image="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
                                height="100px"
                                width="40%"
                                borderRadius="9px"
                                size="sm">
                                <LessonStatus color="dark" size="sm" className="mb-1 lesson-status">
                                    <LessonStatusesIcons.Upcoming color="white" size="6px" className="text-white" />
                                    <p className="text-white text-uppercase font-weight-bold mb-0 ml-1">{lessonStatuses.upcoming}</p>
                                </LessonStatus>
                            </ImageCard>
                            <CardMeta className="pt-0">
                                <p className={`text-${getRandomColor()}`}>Physics</p>
                                <h5>Materials - Metallic & Non Metallic Properties</h5>
                                <LabelledIcon>
                                    <Timer /> <p>Started at 1:30 PM</p>
                                </LabelledIcon>
                                <LabelledIcon>
                                    <User /> <p>Gabriella Adeboye</p>
                                </LabelledIcon>
                            </CardMeta>
                        </LessonCard>
                        <LessonCard>
                            <ImageCard
                                image="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
                                height="100px"
                                width="40%"
                                borderRadius="9px"
                                size="sm">
                                <LessonStatus color="red" size="sm" className="mb-1 lesson-status">
                                    <LessonStatusesIcons.Live color="white" size="6px" className="text-white" />
                                    <p className="text-white text-uppercase font-weight-bold mb-0 ml-1">{lessonStatuses.live}</p>
                                </LessonStatus>
                            </ImageCard>
                            <CardMeta className="pt-0">
                                <p className={`text-${getRandomColor()}`}>Physics</p>
                                <h5>Materials - Metallic & Non Metallic Properties</h5>
                                <LabelledIcon>
                                    <Timer /> <p>Started at 1:30 PM</p>
                                </LabelledIcon>
                                <LabelledIcon>
                                    <User /> <p>Gabriella Adeboye</p>
                                </LabelledIcon>
                            </CardMeta>
                        </LessonCard>
                    </LessonsCardGrid>
                    {/* No Record found */}
                    {/* <NothingHere
                        header="Oops! Nothing here"
                        body="Looks like you have not added a lesson for this subject"
                        NothingImage={NothingImage}
                    /> */}
                </Col>
            </Row>
        </Container>
    </Wrapper>);
};

export default Lessons;
