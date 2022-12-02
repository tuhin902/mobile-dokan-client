import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import CategoryCard from './CategoryCard';

const Categories = () => {


    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://mobile-dokan-server.vercel.app/categories')
            const data = res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-16'>
            <h3 className='text-3xl font-bold text-center'>Our Categories</h3>
            <section className='mt-16'>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                    {
                        categories.map(category => <CategoryCard
                            key={category._id}
                            category={category}

                        ></CategoryCard>)
                    }
                </div>

            </section>
        </div>
    );
};

export default Categories;