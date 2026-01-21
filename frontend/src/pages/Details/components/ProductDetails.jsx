import React from 'react';

export default function ProductDetails({ product }) {
    if (!product) return null;

    const hasDetails = product.details || product.dimensions;

    if (!hasDetails) return null;

    return (
        <div className="my-25">
            {product.details && (
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider">Details</h2>
                    <p className="text-lg/[30px] text-[#1d1f2eb3] leading-relaxed whitespace-pre-line">
                        {product.details}
                    </p>
                </div>
            )}

            {product.dimensions && product.dimensions.length > 0 && (
                <div>
                    <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider">Dimensions</h2>
                    <div className="space-y-3">
                        {product.dimensions.map((dimension, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center py-2 border-b border-gray-200"
                            >
                                <span className="text-gray-600">{dimension.label}:</span>
                                <span className="font-medium">{dimension.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
