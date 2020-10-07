import React from 'react';

import VideoItem from './__item/video__item';

import './video.scss';

const videos = [
    {
        id: 'qclpCtW9upE',
        title: 'Начало',
    },
];

const Video = React.forwardRef((props, ref) => {
    return (
        <section className="video" ref={ref}>
            <h2 className="title">Мы на видео</h2>
            <div className="list">
                {videos.map(({id, title}, index) => <VideoItem key={index} videoId={id} title={title} />)}
            </div>
        </section>
    );
});

export default Video;
