import React from 'react';
import CategorySection from './CategorySection/CategorySection';
import Hero from '../../Pages/Home/Hero/Hero'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <CategorySection></CategorySection>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;