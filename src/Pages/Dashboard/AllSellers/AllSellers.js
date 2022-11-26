import { useQuery } from '@tanstack/react-query';
import React from 'react';
import User from './User';

const AllSellers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`http://localhost:5000/users`)
            .then(res => res.json())
    });
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Verify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => <User key={user?._id} user={user} i={i} refetch={refetch}></User>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;