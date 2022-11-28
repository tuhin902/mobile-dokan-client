import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="carousel  w-full h-4/5 rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img className=' h-4/5' src="https://i0.wp.com/www.mobilebd.co/wp-content/uploads/2022/05/Apple-Original-new-iPhone-price-in-Bangladesh-under-20k-who-will-buy.jpg?fit=1239%2C679&ssl=1" alt='' />
                </div>
                <div className='min-h-screen'>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-24 right-5 top-1/2">
                        <h3 className='text-6xl font-bold text-white'>Big sale is comming <br /> on this friday</h3>
                    </div>
                    <div className="absolute flex justify-between w-1/2 transform -translate-y-1/2 left-24 right-5 top-2/3">
                        <p className='text-xl text-white'>we are  going to give some discount on some of our laptop. this offer will only available on friday.be ready to grab your desire laptop on a discount price.</p>
                    </div>
                    <div className="absolute flex justify-start w-1/2 transform -translate-y-1/2 left-24 right-5 top-3/4">
                        <button className="btn btn-info mr-5">Discount more</button>
                        <button className="btn btn-outline btn-info">Last sell</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='carousel-img w-full'>
                    <img src="https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG" className="w-full  h-4/5" alt='' />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-24 right-5 top-1/2">
                    <h3 className='text-6xl font-bold text-white'>Best Service in city</h3>
                </div>
                <div className="absolute flex justify-between w-1/2 transform -translate-y-1/2 left-24 right-5 top-2/3">
                    <p className='text-xl text-white'>After buying laptop from us you will reacive best service from us . we always care about our customer that why we provide service to our customer </p>
                </div>
                <div className="absolute flex justify-start w-1/2 transform -translate-y-1/2 left-24 right-5 top-3/4">
                    <button className="btn btn-info mr-5">Discount more</button>
                    <button className="btn btn-outline btn-info">Last sell</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='w-full  carousel-img'>
                    <img className=' h-4/5 w-full' src="https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHNhbXN1bmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt='' />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-24 right-5 top-1/2">
                    <h3 className='text-6xl font-bold text-white'>Special discount offer</h3>
                </div>
                <div className="absolute flex justify-between w-1/2 transform -translate-y-1/2 left-24 right-5 top-2/3">
                    <p className='text-xl text-white'>We are giving a special discount on Lenovo laptop(selected item). this discount wil only available for few days. so buy as soon as possible to get our special offer.</p>
                </div>
                <div className="absolute flex justify-start w-1/2 transform -translate-y-1/2 left-24 right-5 top-3/4">
                    <button className="btn btn-info mr-5">Discount more</button>
                    <button className="btn btn-outline btn-info">Last sell</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='w-full carousel-img'>
                    <img className=' h-4/5' src="https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt='' />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-24 right-5 top-1/2">
                    <h3 className='text-6xl font-bold text-white'>Good news for Gammers</h3>
                </div>
                <div className="absolute flex justify-between w-1/2 transform -translate-y-1/2 left-24 right-5 top-2/3">
                    <p className='text-xl text-white'>The new MSI Gaming laptop with GEFORCE RTX 20 serise is available. pre order now to get the best gaming experience with GEFORCE RTX 20 as soon as possible.</p>
                </div>
                <div className="absolute flex justify-start w-1/2 transform -translate-y-1/2 left-24 right-5 top-3/4">
                    <button className="btn btn-info mr-5">Discount more</button>
                    <button className="btn btn-outline btn-info">Last sell</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;