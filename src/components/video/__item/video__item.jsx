import React from 'react';

import './video-item.scss';

const VideoItem = ({videoId, title}) => {
    return (
        <div className="video-item">
            <h3 className="title">
                {title}
            </h3>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
            >
            </iframe>
        </div>
    );
};

export default VideoItem;
