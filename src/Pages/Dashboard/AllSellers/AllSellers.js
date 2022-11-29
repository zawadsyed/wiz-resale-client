import { useQuery } from '@tanstack/react-query';
import Seller from './Seller';
import Swal from 'sweetalert2';

const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: () => fetch(`https://wiz-resale-server.vercel.app/users?role=seller`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    });
    const handleDeleteSeller = id => {
        const confirmation = window.confirm('Are you sure to delete the Seller??');
        if (confirmation) {
            fetch(`https://wiz-resale-server.vercel.app/users/${id}`, {
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
                            title: `You have deleted a Seller successfully`,
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
                            <th>Email</th>
                            <th>Name</th>
                            <th>Verify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sellers.map((seller, i) => <Seller key={seller?._id} seller={seller} i={i} handleDeleteSeller={handleDeleteSeller}></Seller>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;