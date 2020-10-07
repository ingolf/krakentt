import React from 'react';
import AppContext from '../app-context';

import AboutUs from '../components/about-us/about-us';
import Header from '../components/header/header';
import Layout from '../components/layout/layout';

const IndexPage = () => {
    const aboutUsRef = React.createRef();

    return (
        <Layout>
            <AppContext.Provider value={{aboutUsRef}}>
                <Header />
                <AboutUs ref={aboutUsRef} />
            </AppContext.Provider>
        </Layout>
    )
};

export default IndexPage;
