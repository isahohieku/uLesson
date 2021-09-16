import Slider, { Settings } from "react-slick";
import Chevron from '@assets/svg/chevron.svg';
import Timer from '@assets/svg/timer.svg';
import { NavButton } from "./styles";
import { useState, useRef } from "react";
import { CarouselCard, CarouselCardMeta, LessonStatus } from "@components/CarouselCard";
import { LabelledIcon } from "@styles/shared/detailed-card";
import { lessonStatuses, LessonStatusesIcons } from "@types";
import { hexColors } from "@styles/shared/colors";

const UCarousel = () => {
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
        autoplay: true
    };
    return (<>
        <div className="position-relative">
            <Slider ref={sliderRef} {...settings}>
                <div className="overflow-hidden carousel-item">
                    <CarouselCard image="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
                        className="mx-auto">
                        <CarouselCardMeta>
                            <LessonStatus color="red" className="mb-3">
                                <LessonStatusesIcons.Live size="9px" color="white" />
                                <p className="text-white text-uppercase font-weight-bold mb-0 ml-1">{lessonStatuses.live}</p>
                            </LessonStatus>
                            <h5 className="font-weight-bold text-white">Materials - Metals & Non Metals</h5>
                            <LabelledIcon className="text-white">
                                <Timer /> <p>Started at 1:30 PM</p>
                                <span className="d-inline-block ml-3 mr-1 bg-white"></span>
                                <p>Gabriella Adeboye</p>
                            </LabelledIcon>
                        </CarouselCardMeta>
                    </CarouselCard>
                </div>
                <div className="overflow-hidden carousel-item">
                    <div className="mx-auto">
                        <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" alt="A cat" />
                    </div>
                </div>
                <div className="overflow-hidden carousel-item">
                    <div className="mx-auto">
                        <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" alt="A cat" />
                    </div>
                </div>
                <div className="overflow-hidden carousel-item">
                    <div className="mx-auto">
                        <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" alt="A cat" />
                    </div>
                </div>
                <div className="overflow-hidden carousel-item">
                    <div className="mx-auto">
                        <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" alt="A cat" />
                    </div>
                </div>
                <div className="overflow-hidden carousel-item">
                    <div className="mx-auto">
                        <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" alt="A cat" />
                    </div>
                </div>
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
