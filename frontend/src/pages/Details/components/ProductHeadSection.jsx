import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../../components/layout/Button';
import ButtonSales from '../../../components/layout/ButtonSales';
import { useProductDetail } from '../../../hooks/useProductDetail';
import { useAddToCart } from '../../../hooks/useAddToCart';
import { formatPrice } from '../../../utils/formatPrice';

export const ProductHeadSection = () => {
    const { id } = useParams();
    const { product, loading } = useProductDetail(id);
    const { handleAddToCart, loading: cartLoading } = useAddToCart();

    const [quantity, setQuantity] = useState(1);

    if (loading) return <p>Loading...</p>;
    if (!product) return null;

    return (
        <div className="flex flex-col lg:grid grid-cols-2 gap-10 my-25">
            <div className="w-full relative mb-6 overflow-hidden group">
                <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover object-center w-full h-115 transition-transform duration-500 group-hover:scale-105"
                />

                {product.oldPrice && (
                    <ButtonSales
                        className="absolute mt-2.5 mr-2.5 right-0 top-0 cursor-text "
                        onClick={(e) => e.preventDefault()}
                    >
                        On Sale.
                    </ButtonSales>
                )}
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start">
                <div className="text-4xl mt-2.5 mb-3.75">{product.name}</div>
                <p className="text-lg/[30px] text-[#1d1f2eb3] text-center lg:text-left ">{product.description}</p>
                <div className="my-7.5">
                    <div
                        className="flex items-center gap-2 text-gray-500 cursor-text select-text w-full justify-center lg:justify-start"
                        onClick={(e) => e.preventDefault()}
                    >
                        <span
                            className={`${
                                product.oldPrice ? 'text-3xl text-coffee' : 'text-3xl text-black font-medium'
                            }`}
                        >
                            {formatPrice(product.price)}
                        </span>

                        {product.oldPrice && (
                            <span className="line-through text-[16px]">{formatPrice(product.oldPrice)}</span>
                        )}
                    </div>

                    <p className="mb-3 uppercase tracking-[2px] text-sm text-[#1d1f2e99] font-medium text-center lg:text-left">
                        quantity
                    </p>
                    <div className="flex items-center">
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                            className="py-4.5 px-6 w-25 bg-[#fafafa] border border-[#e5e5e7] text-xs mr-2.5"
                        />

                        <Button
                            disabled={cartLoading}
                            onClick={() =>
                                handleAddToCart({
                                    productId: product._id,
                                    quantity,
                                })
                            }
                            className="bg-black! text-white"
                        >
                            {cartLoading ? 'Adding...' : 'Add to cart'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductHeadSection;
