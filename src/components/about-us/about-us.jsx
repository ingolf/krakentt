import React from 'react';

import TeamGallery from '../team-gallery/team-gallery';

import './about-us.scss';

const text = `Добрейшего дня наши дорогие моряки и морЯчки, земляки и землЯчки, отвязные весельчаки и скучающие меланхолики!
Спешим представить вам нашу небольшую, но дружную и заводную команду – Kraken Tiger Teeth или по-простому Kraken TT, чье название уходит своими корнями в далекие края рисовых полей и восходящего солнца. 
Мы веселые и дружелюбные, от чего становимся все красивее и умнее, а следовательно – смелее, ведь наш неукротимый задор придает нам все больше сил и отваги (возможно, немного слабоумия тоже), а все эти качества, разумеется, подкрепляются лишь нашей чрезмерной скромностью. 
Мы рады приветствовать вас всех и каждого по отдельности на нашем сайте и искренне надеемся, что наши приключения окажутся для вас интересными и познавательными (или просто интересными, как пойдет).
Добро пожаловать на борт!`.split('\n');

const team = [
    {name: 'Александр', duty: '', img: '/team/2.jpg'},
    {name: 'Сергей', duty: '', img: '/team/3.jpeg'},
    {name: 'Екатерина', duty: '', img: '/team/4.jpeg'},
    {name: 'Степан', duty: '', img: '/team/5.jpg'},
    {name: 'Анна', duty: '', img: '/team/6.jpg'},
].sort(() => Math.random() - 0.5);

team.unshift(
    {name: 'Игорь', duty: '', img: '/team/1.jpg'}
);

const AboutUs = React.forwardRef((props, ref) => {
    return (
        <section className="about-us" ref={ref}>
            <h2>Карамба! <span role="img" aria-label="deny">🖖</span></h2>
            {text.map((part, index) => <p key={index}>{part}</p>)}
            <h2>Наша команда</h2>
            <TeamGallery items={team} />
        </section>
    );
});

export default AboutUs;
