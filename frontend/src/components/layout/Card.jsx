import React from 'react';
import Button from '../layout/Button';
import ButtonSales from '../layout/ButtonSales';

const Card = ({ image, name, imageClass = '', showSale = false, textButton = '' }) => {
    const fallbackImage = '/images/no-image.png';

    return (
        <div className={`w-full relative mb-6 overflow-hidden group ${imageClass || 'h-auto'}`}>
            <img
                src={image || fallbackImage}
                alt={name || 'Image'}
                loading="lazy"
                className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = fallbackImage;
                }}
            />

            {/* SALE BADGE */}
            {showSale && (
                <ButtonSales className="absolute top-0 right-0 mt-2.5 mr-2.5 cursor-default">On Sale</ButtonSales>
            )}

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* ACTION BUTTON */}
            {textButton && (
                <Button
                    className="absolute left-0 right-0 mx-3.75 mb-3.75 bottom-0
                    translate-y-6 opacity-0 transition-all duration-300
                    group-hover:translate-y-0 group-hover:opacity-100"
                >
                    {textButton}
                </Button>
            )}
        </div>
    );
};

export default Card;
