import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/product.service';

const useProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getMoreProducts = async () => {
            try {
                const res = await getAllProducts();
                setProducts(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        getMoreProducts();
    }, []);
    return { products };
};

export default useProduct;
