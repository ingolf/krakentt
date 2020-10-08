import React, { useMemo } from 'react';
import { isMobile } from 'react-device-detect';

import './team-gallery.scss';

const TeamGallery = ({items = []}) => {
    const gallery = items.map(({img, name, duty}) => {
        const rotate = isMobile
            ? 0
            : 25 * Math.random() - 15;

        return (
            <div
                className="item"
                style={{
                    '--rotate': `${rotate}deg`,
                    '--name': `"${name} ${duty}"`,
                }}
            >
                <img
                    className="item-img"
                    src={img}
                    alt={name}
                />
            </div>
        );
    });

    return (
        <div className="team-gallery">
            {gallery}
        </div>
    );
};

export default TeamGallery;
