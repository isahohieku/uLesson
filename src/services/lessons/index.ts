import { Api } from '@utils/fetch';
import Toast, { messageStatus } from '@utils/toast';

export const getAllLessons = async (setLoading, setData, clearData) => {
    try {
        setLoading(true);
        clearData();
        const { data } = await Api.get('lessons');
        setData(data);
        return data;
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
        const { data } = await Api.get('lessons/me');
        setData(data);
        return data;
    } catch (error) {
        Toast(typeof error === 'string' ? error : error.message, messageStatus.Error);
    } finally {
        setLoading(false);
    }
};
