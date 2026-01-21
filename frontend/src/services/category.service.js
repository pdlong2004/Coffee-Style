import api from '../lib/axios';

export const getCategory = () => {
    return api.get('/category');
};
