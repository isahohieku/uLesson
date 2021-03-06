import { LiveIcon, PlayIcon } from "@components/CarouselCard";
import { Dispatch, ReactNode, SetStateAction } from "react";
import Calendar from '@assets/svg/calendar-filled.svg';

export interface StateAction {
    type: string;
    payload: any;
}

export interface AppState {
    promotedLessons: any[];
    promotedLessonsLoading: boolean;
    allLessons: any[];
    allLessonsLoading: boolean;
    userLessons: any[];
    userLessonsLoading: boolean;
}

export interface AppContext {
    state: AppState;
    dispatch: Dispatch<SetStateAction<AppState>>;
}

export interface StateProviderProps {
    children: ReactNode;
}

export enum colors {
    red = 'red',
    orange = 'orange',
    purple = 'purple',
    blue = 'blue',
    green = 'green',
}

export enum lessonStatuses {
    live = 'live',
    upcoming = 'upcoming',
    replay = 'replay',
}

export enum lessonEngagementStatuses {
    live = 'Started',
    upcoming = 'Today',
    replay = 'Available',
}

export const LessonStatusesIcons = {
    Live: LiveIcon,
    Upcoming: Calendar,
    Replay: PlayIcon,
};

export interface ISubject {
    name: string;
}

export interface ITutor {
    firstname: string;
    lastname: string;
}

export interface ILesson {
    createdAt: string;
    expires_at: string;
    id: string;
    image_url: string;
    start_at: string;
    status: lessonStatuses;
    subject: ISubject;
    topic: string;
    tutor: ITutor;
}

export interface APIResponseData {
    data: ILesson[];
    success: boolean;
}
