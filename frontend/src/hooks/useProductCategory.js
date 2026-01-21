import { useEffect, useState } from 'react';
import { getProductsByCategory, getAllProducts } from '../services/product.service';

export const useProductCategory = (id) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProductCategory = async () => {
            setLoading(true);
            try {
                const res = id ? await getProductsByCategory(id) : await getAllProducts();

                const data = id ? res.data.data : res.data;
                setProducts(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error(err);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProductCategory();
    }, [id]);

    return { products, loading };
};
