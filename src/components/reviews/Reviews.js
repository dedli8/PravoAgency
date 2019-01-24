import React, {Component} from 'react';
import Mainheader from '../mainheader/Mainheader'
import Review from './review/Review'
import Download from './icons/Download'
import {Consumer} from "../../context";

class Reviews extends Component {
    render() {
        return(
            <Consumer>
                {value => {
                    const {reviews} = value;
                    const {title, description, strong, key} = value.reviewsTitledata;
                    return (
                        <section className='reviews-section' id='reviews'>
                            <Mainheader title={title} description={description} strong={strong} key={key}/>
                            <div className="container">
                                <div className="reviews-wrap">
                                    {reviews.map((review, index) => <Review review={review} key={index}/>)}
                                </div>
                                <div className="download-more"><Download/><span>загрузить еще</span></div>
                            </div>
                        </section>
                    );
                }
                }
            </Consumer>
        )
    }
}


export default Reviews;
