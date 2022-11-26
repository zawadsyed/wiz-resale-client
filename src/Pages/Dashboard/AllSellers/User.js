import React from 'react';
import { useState } from 'react';

const User = ({ user, i, refetch }) => {
    const { email, name, role, isVerified } = user;
    const [sellerVerified, setSellerVerfied] = useState(user?.isVerified);

    const verifySeller = user => {
        refetch();
        setSellerVerfied(true);
    }

    if (user?.role === "Seller") {
        return (
            <tr>
                <th>{i + 1}</th>
                <td>{email}</td>
                <td>{name}</td>
                {!sellerVerified ?
                    <td><button onClick={() => verifySeller(user)} className='badge badge-primary'>Verify</button></td>
                    :
                    <td>Verified</td>
                }
            </tr>
        )
    }
    console.log(email, name, role)
};

export default User;