import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Sectiontitle from '../sectiontitle/Sectiontitle'
import Review from './review/Review'
import Avatar1 from '../../assets/img/avatar1.jpg'
import Avatar2 from '../../assets/img/avatar2.jpg'
import YT from './icons/YT'
import Quotes from './icons/Quotes'
import Download from './icons/Download'

class Reviews extends Component {
    state= {
        reviews: [
            {
                icon: <Quotes/>,
                content: "Главная тема для меня – любовь. Мы все хотим ее, но не знаем как получить, поэтому все, что мы делаем, — это всего лишь попытки найти счастье.",
                avatar: [<img src={Avatar1} className='avatar'/>],
                author: "Алексей Фёдоров",
                field: "CEO",
                company: "deco.agency"
            },
            {
                icon: <Quotes/>,
                content: "Главная тема для меня – любовь. Мы все хотим ее, но не знаем как получить, поэтому все, что мы делаем, — это всего лишь попытки найти счастье.",
                avatar: [<img src={Avatar2} className='avatar'/>],
                author: "Артур Оруджалиев",
                field: "CEO",
                company: "AIN.ua"
            },
            {
                icon: <YT/>,
                content: [<iframe className='yt-container' src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>],
                author: "Григорий Маленко",
                field: "CEO",
                company: "deco.agency"
            }
            ],
        titledata:{
            title: "отзывы",
            description: ["Мнение наших клиентов ", <strong>делает мир и нас лучше :)</strong>],
            key: 5
        },
    };
    render() {
        const {reviews} = this.state;
    const {title, description, strong, key} = this.state.titledata;
        return (
            <section className='reviews-section' id='reviews'>
                <Sectiontitle title = {title} description = {description} strong={strong} key={key}/>
                <div className="container">
                    <div className="reviews-wrap">
                    {reviews.map((review, index) => <Review review={review} key={index}/>)}
                    </div>
                    <div className="download-more"><Download/><span>загрузить еще</span> </div>
                </div>
            </section>
        );
    }
}


export default Reviews;
