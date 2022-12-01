import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Allusers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/users');
            const data = res.json();
            return data
        }
    })
    return (
        <div>
            <h2 className="text-3xl font-bold m-5">All Users</h2>
            <div className="overflow-x-auto border border-cyan-400 shadow-md shadow-cyan-400">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Favorite Color</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>Blue</td>
                                    <td>Blue</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;