import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn btn-primary rounded-full capitalize text-lg px-6">{children}</button>
    );
};

export default PrimaryButton;