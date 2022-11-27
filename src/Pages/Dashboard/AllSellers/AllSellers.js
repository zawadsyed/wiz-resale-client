import { useQuery } from '@tanstack/react-query';
import React from 'react';
import User from './User';

const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['users', 'sellers'],
        queryFn: () => fetch("http://localhost:5000/users?role=seller")
            .then(res => res.json())
    });
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Verify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sellers.map((seller, i) => <User key={seller?._id} user={seller} i={i} refetch={refetch}></User>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;