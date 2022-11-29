import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';
import DotLoader from "react-spinners/DotLoader";

const CategorySection = () => {
    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('https://wiz-resale-server.vercel.app/categories')
            .then(res => res.json())
    })
    if (isLoading) {
        return <DotLoader className='mx-auto' color="#d8ab06" />
    }
    return (
        <div className='max-w-[1320px] mx-auto mt-[100px]'>
            <h1 className='text-3xl mb-[48px]'>Categories</h1>
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