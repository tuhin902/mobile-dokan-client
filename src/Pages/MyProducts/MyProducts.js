import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MyProductsCard from './MyProductsCard';

const MyProducts = () => {

    const { data: myProducts = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/myproducts');
            const data = res.json();
            return data;
        }
    });

    return (
        <div>
            <h2>my products</h2>
            <div>
                {
                    myProducts.map(product => <MyProductsCard
                        key={product._id}
                        product={product}
                    ></MyProductsCard>)
                }
            </div>
        </div>
    );
};

export default MyProducts;