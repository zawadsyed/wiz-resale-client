import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import MyProduct from './MyProduct';
import Swal from 'sweetalert2';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: myProducts = [], refetch } = useQuery({
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
    const handleDeleteProduct = product => {
        const confirmation = window.confirm('Are you sure to delete the Product??');
        if (confirmation) {
            fetch(`http://localhost:5000/my-products/${product._id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            icon: 'success',
                            title: `You have deleted a Product successfully`,
                            timer: 1500
                        })
                    }
                })
        }

    }

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
                        {myProducts.map((product, i) => <MyProduct key={product?._id} product={product} handleDeleteProduct={handleDeleteProduct}></MyProduct>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;