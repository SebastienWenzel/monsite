import React from 'react';
import Header from '../components/header/Header';
import Heromain from '../components/hero-main/Heromain'
import Heroservice from '../components/hero-service/Heroservice';
import Heroproject from '../components/hero-project/Heroproject';

const Home = () => {
    return (
        <div className='homesection'>
            <Header/>
            <Heromain/>
            <Heroservice/>
            <Heroproject/>
        </div>
    );
};

export default Home;