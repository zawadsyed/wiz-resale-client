import React from 'react';
import { useState } from 'react';

const Seller = ({ seller, i, refetch }) => {
    const { email, name, role, isVerified } = seller;
    const [sellerVerified, setSellerVerfied] = useState(seller?.isVerified);

    const verifySeller = seller => {
        refetch();
        setSellerVerfied(true);
    }
    return (
        <tr>
            <th><button className='btn btn-accent'>Delete</button></th>
            <td>{email}</td>
            <td>{name}</td>
            {!sellerVerified ?
                <td><button onClick={() => verifySeller(seller)} className='badge badge-primary'>Verify</button></td>
                :
                <td>Verified</td>
            }
        </tr>
    )
};

export default Seller;