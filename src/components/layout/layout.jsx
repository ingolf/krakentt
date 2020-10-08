import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../footer/footer';

const title = 'KrakenTT Sailing Crew - сайт команды';
const description = 'Сайт команды KrakenTT на яхт-квесте 2020 в Турции';
const keywords = 'TrueWind, Yacht-quest, Encounter, Quest, Yachting, Трувинд, Яхт-квест, квест, яхтинг';

const Layout = ({children}) => {
    return (
        <main className="layout">
            <Helmet>
                <title>{title}</title>
                <link rel="shortcut icon" href="/favicon.ico"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <meta property="og:site_name" content={title} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" itemprop="image" content="https://krakentt.ru/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:updated_time" content={Date.now()} />
            </Helmet>
            {children}
            <Footer />
        </main>
    );
};

export default Layout;
