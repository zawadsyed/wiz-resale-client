import { useQuery } from '@tanstack/react-query';
import Buyer from './Buyer';
import Swal from 'sweetalert2';

const AllBuyers = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: () => fetch(`https://wiz-resale-server.vercel.app/users?role=buyer`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    });
    const handleDeleteBuyer = id => {
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
                        </tr>
                    </thead>
                    <tbody>
                        {buyers.map((buyer, i) => <Buyer key={buyer?._id} buyer={buyer} i={i} handleDeleteBuyer={handleDeleteBuyer}></Buyer>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;