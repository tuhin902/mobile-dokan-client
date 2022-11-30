import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {

    const { type, image } = category;
    return (
        <Link to={`/categories/${type}`}>
            <div className="card shadow-cyan-400 shadow-xl">
                <figure><img src={image} alt="mobile" className='w-full h-64 ' /></figure>
                <div className="card-body ">
                    <h2 className="card-title">Type:{type}</h2>

                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;