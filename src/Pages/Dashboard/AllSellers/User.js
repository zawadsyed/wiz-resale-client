import React from 'react';
import { useState } from 'react';

const User = ({ user, i, refetch }) => {
    const { email, name, role, isVerified } = user;
    const [sellerVerified, setSellerVerfied] = useState(user?.isVerified);

    const verifySeller = user => {
        refetch();
        setSellerVerfied(true);
    }
    return (
        <tr>
            <th><button className='btn btn-accent'>Delete</button></th>
            <td>{email}</td>
            <td>{name}</td>
            {!sellerVerified ?
                <td><button onClick={() => verifySeller(user)} className='badge badge-primary'>Verify</button></td>
                :
                <td>Verified</td>
            }
        </tr>
    )
};

export default User;