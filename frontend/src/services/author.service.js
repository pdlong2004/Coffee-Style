import api from '../lib/axios';

export const getAuthorApi = () => {
    return api.get('/author');
};
