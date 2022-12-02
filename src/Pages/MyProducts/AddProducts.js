import React from 'react';
import toast from 'react-hot-toast';

const AddProducts = () => {

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const productname = form.productname.value;
        const img = form.img.value;
        const price = form.price.value;
        const type = form.type.value;
        const purchase = form.purchase.value;
        const location = form.location.value;
        const mobile = form.mobile.value;

        console.log(name, productname, img, price, type, purchase, location, mobile)

        const AddProduct = {
            name,
            productname,
            img,
            price,
            type,
            purchase,
            location,
            mobile
        };

        fetch('https://mobile-dokan-server.vercel.app/addproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Product added');
                }
                else {
                    toast.error(data.message);
                }
            })

    }

    return (
        <div className='w-full lg:w-1/2 mx-auto'>
            <h2 className='text-3xl font-bold text-center m-5'>Add Products</h2>
            <div className='border shadow-xl shadow-cyan-400'>
                <form onSubmit={handleAddProduct} className='grid grid-cols-1 gap-3 mt-10'>
                    <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered " />
                    <input name='productname' type="text" placeholder="Product Name" className="input w-full input-bordered " />
                    <input name='img' type="text" className="input w-full input-bordered " placeholder='Image' />
                    <input name='price' type="text" className="input w-full input-bordered " placeholder='price' />
                    <input name='type' type="text" placeholder="Type" className="input w-full input-bordered " />
                    <input name='purchase' type="text" placeholder="Purchase" className="input w-full input-bordered " />
                    <input name='details' type="text" placeholder="Details" className="input w-full input-bordered " />
                    <input name='location' type="text" placeholder=" location" className="input w-full input-bordered " />
                    <input name='mobile' type="text" placeholder="Mobile" className="input w-full input-bordered " />
                    <br />
                    <input className='btn btn-accent w-1/2 mx-auto input-bordered mb-5' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;