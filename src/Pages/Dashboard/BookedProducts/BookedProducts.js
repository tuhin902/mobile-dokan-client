import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const BookedProducts = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:4000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className="text-3xl font-bold m-5">My Booked Products</h3>
            <div className="overflow-x-auto border border-cyan-400 shadow-md shadow-cyan-400">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Item</th>
                            <th>Price </th>
                            <th>Phone </th>
                            <th>Address </th>
                            <th>Meeting Location </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) =>
                                <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking.name}</td>
                                    <td>{booking.item}</td>
                                    <td>${booking.price}</td>
                                    <td>{booking.phone}</td>
                                    <td>{booking.address}</td>
                                    <td>{booking.location}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookedProducts;