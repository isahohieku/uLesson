import { Api } from '@utils/fetch';

export const getAllLessons = async () => Api.get('lessons');

export const getUserLessons = async () => Api.get('lessons/me');

