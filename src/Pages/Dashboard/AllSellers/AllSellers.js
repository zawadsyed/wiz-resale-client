import { useQuery } from '@tanstack/react-query';
import Seller from './Seller';

const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: () => fetch(`http://localhost:5000/users?role=seller`, {
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
                            <th>Verify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sellers.map((seller, i) => <Seller key={seller?._id} seller={seller} i={i} refetch={refetch}></Seller>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;