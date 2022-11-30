import React from 'react';
import Helpline from '../../Helpline/Helpline';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Helpline></Helpline>
        </div>
    );
};

export default Home;