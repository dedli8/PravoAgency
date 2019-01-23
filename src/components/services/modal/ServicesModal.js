import React, {Component} from 'react';

class ServicesModal extends Component {
    render() {
        return (
            <div className='services-modal'>
                <div className="red-line"><div className="arrow"></div></div>
                <div className="block">
                    <p className="name">Услуга</p>
                    <div className="content">
                        <h3 className="title">Оптимизация
                            договорных отношений </h3>
                        <p className="text">Борьба внутри меня, и я был в самых разных
                            ситуациях в моей жизни. <strong>Таким образом, борьба, что
                            у меня на постоянной основе, это просто пробовать
                            и быть лучше.</strong><br/>
                            <br/>
                            Есть определенная разница между публичным человеком и обычным человеком, это как сойти с ума
                            - для меня во всяком случае - открыть себя целиком для всего мира. </p>
                    </div>
                </div>
                <div className="block">
                    <p className="name name-price">Цена</p>
                    <div className="content">
                        <div className="price-wrap">
                        <div className="price-item">
                            <div className="num">&#60; 50</div>
                            <div className="employee">Сотрудников</div>
                            <div className="price">от <span>5000 <small>грн.</small></span></div>
                        </div>
                        <div className="price-item">
                            <div className="num">50-100</div>
                            <div className="employee">Сотрудников</div>
                            <div className="price">от <span>15000 <small>грн.</small></span></div>
                        </div>
                        <div className="price-item">
                            <div className="num">&#62; 100</div>
                            <div className="employee">Сотрудников</div>
                            <div className="price">от <span>25000 <small>грн.</small></span></div>
                        </div>
                        </div>
                        <button className="main-btn">заказать</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServicesModal;
