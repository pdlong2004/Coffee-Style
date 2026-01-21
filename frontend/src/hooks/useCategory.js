import React, { useEffect, useState } from 'react';
import { getCategory } from './../services/category.service';

const useCategory = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const getCategorys = async () => {
            try {
                const res = await getCategory();
                setCategory(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        getCategorys();
    }, []);

    return { category };
};

export default useCategory;
