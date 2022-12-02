import React from 'react';

const MyProductsCard = ({ product }) => {
    const { name, productname, img, price, purchase } = product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productname}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Seller Name:{name}</p>
                    <p>Orginal Price:{price}</p>
                    <p>Resale Price:{purchase}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">available</div>
                        <div className="badge badge-outline">Sold</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProductsCard;