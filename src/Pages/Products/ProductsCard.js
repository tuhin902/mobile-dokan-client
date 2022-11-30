import React from 'react';

const ProductsCard = ({ product, setModalData }) => {
    const { image, name, location, sellerName, orginalPrice,
        resalePrice, used } = product;

    return (
        <div className="card shadow-xl shadow-cyan-400">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Location:{location}</p>
                <p>Seller name:{sellerName}</p>
                <p>Orgianl Price:${orginalPrice}</p>
                <p>Resale Price:${resalePrice}</p>
                <p>Year of use:{used}</p>
                <div className="card-actions">
                    <label htmlFor="booking-modal" className="btn btn-primary"
                        onClick={() => setModalData(product)}
                    >Book now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;