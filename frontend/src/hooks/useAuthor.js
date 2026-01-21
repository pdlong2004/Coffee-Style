import { useEffect, useState } from 'react';
import { getAuthorApi } from '../services/author.service';

const useAuthor = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const getAuthors = async () => {
            try {
                const res = await getAuthorApi();
                setAuthors(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        getAuthors();
    }, []);

    return { authors };
};

export default useAuthor;
