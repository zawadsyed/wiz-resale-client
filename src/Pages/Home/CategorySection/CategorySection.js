import { useQuery } from '@tanstack/react-query';
import React from 'react';

const CategorySection = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('')
            .then(res => res.json())
    })

    return (
        <div>
            <h1>Categories</h1>

        </div>
    );
};

export default CategorySection;