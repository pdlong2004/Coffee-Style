import api from '../lib/axios';

export const getCategoryBlog = () => {
    return api.get('/blogcategory');
};
