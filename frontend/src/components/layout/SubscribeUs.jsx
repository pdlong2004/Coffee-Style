import React from 'react';
import Button from './Button';
import Title from './title';

const SubscribeUs = () => {
    return (
        <div className="px-7.5">
            <div className="py-20 px-25 text-center bg-[#1d1f2e]">
                <Title className={'m-0! text-[#a5a5ab]!'}>Sign up and get free coffee bags</Title>
                <div className="mt-3.75 mb-6.25 text-4xl font-medium text-white">Coffee Updates</div>
                <div>
                    <form action="" className="flex flex-col md:flex-row gap-3 items-center justify-center">
                        <input
                            className="w-full md:w-87.5 py-4.5 px-6 border border-[] h-13.5 text-[#a5a5ab] uppercase font-medium tracking-[2px] text-[12px]"
                            maxLength="256"
                            name="Customer-s-Name"
                            data-name="Customer's Name"
                            placeholder="customer@coffeestyle.io"
                            type="text"
                            id="Customer-s-Name"
                        />
                        <Button className="w-full md:w-auto">Subscribe</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SubscribeUs;
