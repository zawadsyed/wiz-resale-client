import { useQuery } from '@tanstack/react-query';
import Buyer from './Buyer';

const AllBuyers = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: () => fetch(`http://localhost:5000/users?role=buyer`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    });
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
                        {buyers.map((buyer, i) => <Buyer key={buyer?._id} buyer={buyer} i={i} refetch={refetch}></Buyer>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;