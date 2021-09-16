import { Api } from '@utils/fetch';

export const getPromotedLessons = async () => Api.get('promoted');
