import Slider, { Settings } from "react-slick";
import Chevron from '@assets/svg/chevron.svg';
import Timer from '@assets/svg/timer.svg';
import { NavButton } from "./styles";
import { useState, useRef } from "react";
import { CarouselCard, CarouselCardMeta, LessonStatus } from "@components/CarouselCard";
import { LabelledIcon } from "@styles/shared/detailed-card";
import { lessonStatuses, LessonStatusesIcons } from "@types";
import { hexColors } from "@styles/shared/colors";

const UCarousel = ({ data = [] }) => {
    const sliderRef = useRef<Slider>(null);
    const settings: Settings = {
        className: "center",
        dots: true,
        centerMode: true,
        infinite: true,
        arrows: false,
        centerPadding: "150px",
        slidesToShow: 1,
        speed: 500,
        autoplay: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    centerPadding: '0px'
                },
            }
        ]
    };
    return (<>
        <div className="position-relative">
            <Slider ref={sliderRef} {...settings}>
                {data.map(({
                    id,
                    image_url,
                    topic,
                    status,
                    tutor: {
                        firstname,
                        lastname
                    }
                }) => <div className="overflow-hidden carousel-item" key={id}>
                    <CarouselCard image={image_url}
                        className="mx-auto">
                        <CarouselCardMeta>
                            {status === lessonStatuses.upcoming && <LessonStatus color="dark" className="mb-2 md-md-3">
                                <LessonStatusesIcons.Upcoming className="text-white" />
                                <p className="text-white text-uppercase font-weight-bold mb-0 ml-1">{lessonStatuses[status]}</p>
                            </LessonStatus>}
                            {status === lessonStatuses.live && <LessonStatus color="red" className="mb-2 md-md-3">
                                <LessonStatusesIcons.Live color="white" size="9px" className="text-white" />
                                <p className="text-white text-uppercase font-weight-bold mb-0 ml-1">{lessonStatuses[status]}</p>
                            </LessonStatus>}
                            {status === lessonStatuses.replay && <LessonStatus color="orange" className="mb-2 md-md-3">
                                <LessonStatusesIcons.Replay color={hexColors.white} size={6} className="text-white" />
                                <p className="text-white text-uppercase font-weight-bold mb-0 ml-1">{lessonStatuses[status]}</p>
                            </LessonStatus>}
                            <h5 className="font-weight-bold text-white">{topic}</h5>
                            <LabelledIcon className="text-white">
                                <Timer /> <p>Started at 1:30 PM</p>
                                <span className="d-inline-block ml-1 ml-md-3 mr-md-1 mr-0 bg-white"></span>
                                <p>{firstname} {lastname}</p>
                            </LabelledIcon>
                        </CarouselCardMeta>
                    </CarouselCard>
                </div>)}
            </Slider>

            {/* Right Nav Buttons */}
            <NavButton onClick={() => sliderRef.current.slickPrev()} placement="left">
                <span>
                    <Chevron />
                </span>
            </NavButton>

            {/* Left Nav Buttons */}
            <NavButton onClick={() => sliderRef.current.slickNext()} placement="right">
                <span>
                    <Chevron />
                </span>
            </NavButton>
        </div>
    </>);
};

export default UCarousel;
