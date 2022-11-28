import React from 'react';
import { useState } from 'react';



const Seller = ({ seller, i, refetch, handleDeleteSeller }) => {
    const { email, name } = seller;


    // const verifySeller = seller => {
    //     refetch();
    //     setSellerVerfied(true);
    // }
    return (

        <tr>
            <td>
                <button className='btn btn-accent' onClick={() => handleDeleteSeller(seller._id)}>Delete</button>
            </td>
            <td>{email}</td>
            <td>{name}</td>
            <td><button>Verify</button></td>
        </tr>

    )
};

export default Seller;