import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/brazilAvatar.jpg';
import PrimaryButton from '../../../Shared/Button/PrimaryButton/PrimaryButton';

const Hero = () => {
    return (
        <div>
            <div className='hero-bg py-16'>
                <div>
                    <div className="hero-content mx-auto flex-col lg:flex-row-reverse lg:justify-between">
                        <img src={img} alt='dentist' className="max-w-sm" />
                        <div className='hero-contents flex flex-col items-start'>
                            <h1 className="text-5xl font-extrabold leading-tight text-left">Wiz Resale is an exporter of refurbished
                                and used laptop <br /> in bulk quantities.</h1>
                            <p className="py-6 text-left">We are proud of our emphasis on high quality, tested and working products. <br /> Our business thrives on the basis of these principles of integrity, <br /> as we want our customers to be pleased with our products.</p>
                            <Link to='/'>
                                <PrimaryButton></PrimaryButton>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;