import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import Loading from '../Shared/Loading/Loading';
import ProductsCard from './ProductsCard';

const Products = () => {
    const params = useParams();
    const [modalData, setModalData] = useState({});

    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:4000/categories/${params?.type}`);
            return res.data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-10'>
            <h3 className='text-2xl text-center font-bold'>Our Products</h3>
            <section className='mt-16'>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                    {
                        products.map(product => <ProductsCard
                            key={product._id}
                            product={product}
                            setModalData={setModalData}
                        ></ProductsCard>)
                    }
                </div>
                <BookingModal modalData={modalData}
                    setModalData={setModalData}
                    refetch={refetch}
                ></BookingModal>
            </section>
        </div>
    );
};

export default Products;