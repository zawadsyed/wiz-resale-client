import React from 'react';

const Buyer = ({ buyer, handleDeleteBuyer }) => {
    const { email, name } = buyer;
    return (
        <tr>
            <th><button className='btn btn-accent' onClick={() => handleDeleteBuyer(buyer._id)}>Delete</button></th>
            <td>{email}</td>
            <td>{name}</td>

        </tr>

    );
};

export default Buyer;