import { APIResponseData } from '@types';
import { Api } from '@utils/fetch';
import Toast, { messageStatus } from '@utils/toast';

export const getAllLessons = async (setLoading, setData, clearData) => {
    try {
        setLoading(true);
        clearData();
        const { data }: APIResponseData = await Api.get('lessons');
        setData(data);
    } catch (error) {
        Toast(typeof error === 'string' ? error : error.message, messageStatus.Error);
    } finally {
        setLoading(false);
    }
};

export const getUserLessons = async (setLoading, setData, clearData) => {
    try {
        setLoading(true);
        clearData();
        const { data }: APIResponseData = await Api.get('lessons/me');
        setData(data);
    } catch (error) {
        Toast(typeof error === 'string' ? error : error.message, messageStatus.Error);
    } finally {
        setLoading(false);
    }
};
