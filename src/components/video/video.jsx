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
            {videos.map(({id, title}, index) => <VideoItem key={index} videoId={id} title={title} />)}
        </section>
    );
});

export default Video;
