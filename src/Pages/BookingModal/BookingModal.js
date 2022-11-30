import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const BookingModal = ({ modalData }) => {
    const { user } = useContext(AuthContext);
    const { name, resalePrice } = modalData;
    console.log(user);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const item = form.item.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const location = form.location.value;

        console.log(name, email, item, price, phone, address, location)
            ;
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered " />
                        <input name='email' type="email" placeholder="Email Address" defaultValue={user?.email} className="input w-full input-bordered " disabled />
                        <input name='item' type="text" className="input w-full input-bordered " placeholder='item name' defaultValue={name} disabled />
                        <input name='price' type="text" className="input w-full input-bordered " placeholder='price' defaultValue={resalePrice} disabled />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered " />
                        <input name='address' type="text" placeholder="Address" className="input w-full input-bordered " />
                        <input name='location' type="text" placeholder="Meeting location" className="input w-full input-bordered " />
                        <br />
                        <input className='btn btn-accent w-full input-bordered ' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;