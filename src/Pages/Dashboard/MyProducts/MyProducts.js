import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import MyProduct from './MyProduct';
const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: myProducts = [] } = useQuery({
        queryKey: ['my-products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/my-products?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });
    console.log(myProducts)

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Product Name</th>
                            <th>Original Price</th>
                            <th>Resale Price</th>
                            <th>Condition</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myProducts.map((product, i) => <MyProduct key={product?._id} product={product} i={i}></MyProduct>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;