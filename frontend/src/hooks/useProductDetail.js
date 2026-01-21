import { useEffect, useState } from 'react';
import { getProductDetail } from '../services/product.service';

export const useProductDetail = (id) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            try {
                const res = await getProductDetail(id);
                setProduct(res.data);
            } catch (error) {
                console.error('Lỗi lấy chi tiết sản phẩm', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    return { product, loading };
};
