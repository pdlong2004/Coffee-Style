import React from 'react';

const Title = ({ children, className }) => {
    return (
        <div className={`title-coffee ${className} tracking-[2px]`}>
            <div className="subheadline-deco-line"></div>
            <div>{children}</div>
            <div className="subheadline-deco-line"></div>
        </div>
    );
};

export default Title;
