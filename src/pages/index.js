import React from 'react';
import AppContext from '../app-context';

import AboutUs from '../components/about-us/about-us';
import Header from '../components/header/header';
import Layout from '../components/layout/layout';
import Video from '../components/video/video';

const IndexPage = () => {
    const aboutUsRef = React.createRef();
    const videoRef = React.createRef();

    return (
        <Layout>
            <AppContext.Provider value={{aboutUsRef, videoRef}}>
                <Header />
                <AboutUs ref={aboutUsRef} />
                <Video ref={videoRef} />
            </AppContext.Provider>
        </Layout>
    )
};

export default IndexPage;
