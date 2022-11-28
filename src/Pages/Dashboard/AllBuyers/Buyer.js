import React from 'react';

const Buyer = ({ buyer, i, refetch }) => {
    const { email, name } = buyer;
    return (
        <tr>
            <th><button className='btn btn-accent'>Delete</button></th>
            <td>{email}</td>
            <td>{name}</td>

        </tr>

    );
};

export default Buyer;