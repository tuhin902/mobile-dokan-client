import React from 'react';

const CategoryCard = ({ category }) => {

    const { categoryName, image } = category;
    return (
        <div className="card w-96 bg-base-100 border shadow-purple-400 shadow-xl">
            <figure><img src={image} alt="mobile" className='w-full h-64 ' /></figure>
            <div className="card-body ">
                <h2 className="card-title">Type:{categoryName}</h2>

            </div>
        </div>
    );
};

export default CategoryCard;