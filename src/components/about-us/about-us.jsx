import React from 'react';

import './about-us.scss';

const AboutUs = React.forwardRef((props, ref) => {
    return (
        <section className="about-us" ref={ref}>
            About Us
        </section>
    );
});

export default AboutUs;
