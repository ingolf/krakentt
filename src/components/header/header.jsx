import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { DefaultPlayer as Video } from 'react-html5video';

import AppContext from '../../app-context';

import './header.scss';

const Header = () => {
    const ref = useRef();
    const {aboutUsRef} = useContext(AppContext);

    const handleOnScroll = useCallback(() => {
        if (typeof window === 'undefined') return;

        const videoTop = window.innerHeight > window.scrollY ? - window.scrollY / 2 : window.innerHeight;

        ref.current.style.setProperty('--video-top', `${videoTop}px`);
    }, [ref]);

    const handleGoToAboutUs = useCallback((e) => {
        e.preventDefault();

        if (aboutUsRef && aboutUsRef.current)
            aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [aboutUsRef]);

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
            <Video autoPlay loop muted controls={[]}>
                <source src="/header.webm" type="video/webm" />
                <source src="/header.mp4" type="video/mp4" />
            </Video>
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
                    <a href="#" onClick={handleGoToAboutUs}>О нас</a>
                    {/* <a href="#">Наши ролики</a> */}
                    <a href="https://truewind.ru/calendar/yq2020/" rel="noreferrer" target="_blank">Яхт-квест 2020</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
