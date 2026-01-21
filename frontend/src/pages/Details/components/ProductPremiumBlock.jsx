import React from 'react';

const ProductPremiumBlock = () => {
    return (
        <div className="flex flex-col lg:grid grid-cols-2 mb-25">
            <div>
                <div
                    className="min-h-115 w-full h-full bg-[url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a4a1aecdfab_Section%20Image.jpg')]
             bg-cover bg-center bg-no-repeat"
                ></div>
            </div>

            <div className="bg-[#1d1f2e] text-white text-center lg:text-start">
                <div className="mt-3.75 py-10 pl-17.5 mr-20">
                    <div className="text-2xl mb-2.5">
                        <span className="flex mb-2.5 items-center justify-center lg:justify-start">
                            Handmade by <p className="font-medium ml-1.5">CoffeeStyle.</p>
                        </span>
                        <div className="text-lg mb-7.5 text-gray-300">
                            The most versatile furniture system ever created. Designed to fit your life.{' '}
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:flex-row text-lg mt-4.5 lg:items-start">
                        <div className="flex w-12.5 h-7 lg:mr-5 items-center justify-center mb-3.75 lg:mb-0">
                            <img
                                src="https://cdn.prod.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a3cebecdf97_Jewel%20Icon%402x.png"
                                width="26"
                                className="my-6.25"
                            />
                        </div>
                        <div>
                            <div>Premium Quality</div>
                            <p className="text-gray-300 mb-3.75">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:flex-row text-lg mt-4.5 lg:items-start">
                        <div className="flex w-12.5 h-7 lg:mr-5 items-center justify-center mb-3.75 lg:mb-0">
                            <img
                                src="https://cdn.prod.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a4e2aecdf96_Lightbulb%20Icon%402x.png"
                                width="20"
                                className="my-6.25"
                            />
                        </div>
                        <div>
                            <div>Gentle to the Environment</div>
                            <p className="text-gray-300 mb-3.75">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPremiumBlock;
