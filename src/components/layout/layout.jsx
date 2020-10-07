import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../footer/footer';

const title = 'KrakenTT Sailing Crew - сайт команды';
const description = 'Сайт команды KrakenTT на яхт-квесте 2020 в Турции';

const Layout = ({children}) => {
    return (
        <main className="layout">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            {children}
            <Footer />
        </main>
    );
};

export default Layout;
