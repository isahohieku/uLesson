import { APIResponseData } from '@types';
import { Api } from '@utils/fetch';
import Toast, { messageStatus } from '@utils/toast';

export const getPromotedLessons = async (setLoading, setData, clearData) => {
    try {
        setLoading(true);
        clearData();
        const { data }: APIResponseData = await Api.get('promoted');
        setData(data);
        return data;
    } catch (error) {
        Toast(typeof error === 'string' ? error : error.message, messageStatus.Error);
    } finally {
        setLoading(false);
    }
};
