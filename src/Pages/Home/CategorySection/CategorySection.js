import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';

const CategorySection = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/categories')
            .then(res => res.json())
    })
    console.log(categories)
    return (
        <div className='max-w-[1320px] mx-auto'>
            <h1>Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    categories.map(category => <CategoryCard key={category._id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>

        </div>
    );
};

export default CategorySection;