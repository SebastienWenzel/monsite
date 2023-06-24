import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../components/footer/Footer';

const Layout = () => {
    return (
        <div className='Layout'>
            {/* Toute les routes enfants de Layouts'afficheront sur Outlet */}
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;