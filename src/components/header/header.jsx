import throttle from 'lodash/throttle';
import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import { DefaultPlayer as Video } from 'react-html5video-ssr';

import { scrollCustomImplementation } from '../../utils/utils';
import AppContext from '../../app-context';

import './header.scss';

const Header = () => {
    const ref = useRef();
    const {aboutUsRef, videoRef} = useContext(AppContext);

    const handleOnScroll = useCallback(throttle(() => {
        if (typeof window === 'undefined') return;

        const videoTop = isMobile
            ? 0
            : window.innerHeight > window.scrollY ? - window.scrollY / 2 : window.innerHeight;
        const menuTop = window.scrollY > window.innerHeight / (isMobile ? 2 : 3) ? '-500px' : '0px';

        ref.current.style.setProperty('--video-top', `${videoTop}px`);
        ref.current.style.setProperty('--menu-top', menuTop);
    }, 10), [ref]);

    const handleGoToAboutUs = useCallback((e) => {
        e.preventDefault();

        if (aboutUsRef && aboutUsRef.current)
        scrollCustomImplementation(aboutUsRef.current);
    }, [aboutUsRef]);

    const handleGoToVideo = useCallback((e) => {
        e.preventDefault();

        if (videoRef && videoRef.current)
        scrollCustomImplementation(videoRef.current);
    }, [videoRef]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        window.addEventListener('scroll', handleOnScroll);

        return () => {
            window.removeEventListener('scroll', handleOnScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <header className="header" ref={ref}>
            {isMobile ? (
                <Video autoPlay loop muted controls={[]} poster="/poster.png">
                    <source src="/header-mobile-1.webm" type="video/webm" />
                    <source src="/header-mobile-1.mp4" type="video/mp4" />
                </Video>
            ) : (
                <Video autoPlay loop muted controls={[]} poster="/poster.png">
                    <source src="/header.webm" type="video/webm" />
                    <source src="/header.mp4" type="video/mp4" />
                </Video>
            )}
            <div className="header-content-wrapper">
                <div className="header-content">
                    <div className="logo-wrapper">
                        <img src="/logo2.png" alt="" className="logo" />
                    </div>
                    <div className="header-main">
                        <h1 className="title-name">Kraken TT</h1>
                        <h2 className="title-type">Sailing Crew</h2>
                        <h3 className="title-city">Moscow</h3>
                    </div>
                </div>
                <nav className="menu">
                    <a href="/" onClick={handleGoToAboutUs}>О нас</a>
                    <a href="/" onClick={handleGoToVideo}>Мы на видео</a>
                    <a href="https://truewind.ru/calendar/yq2020/" rel="noreferrer" target="_blank">Яхт-квест 2020</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
