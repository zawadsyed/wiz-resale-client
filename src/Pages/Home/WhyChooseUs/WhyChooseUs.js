import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className='mt-[100px]'>
            <h1 className='mb-[48px] text-3xl'>Why Choose Us?</h1>
            <div className="stats border-gray shadow">
                <div className="stat place-items-center">
                    <div className="stat-title">
                        World Wide Shipping</div>
                    <div className="stat-value">31K</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Years of Experience</div>
                    <div className="stat-value text-primary">20+</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Fast Deliveries</div>
                    <div className="stat-value">20% Faster</div>
                </div>

            </div>
        </div>

    );
};

export default WhyChooseUs;