import React, {Component} from 'react';
import Sectiontitle from "../sectiontitle/Sectiontitle";

class Feedbackform extends Component {
    render() {
        return (
            <section className="feedback">
<Sectiontitle title = "запрос на услуги"/>
                <div className="container"><form className="form">
<div className="left">
    <div className="inputs-wrap">
    <input type="text" placeholder='имя*'/><input type="text" placeholder="телефон*"/><input type="text" placeholder="e-mail*"/><input type="text" placeholder="сайт"/>
    </div>
    <div className="topic-box">
        <p className="title">
            МЕНЯ ИНТЕРЕСУЕТ</p>
        <ul className="topic-list">
            <li>Наведение порядка в делах</li>
            <li>Правовое сопровождение деятельности</li>
            <li>Оптимизация договорных отношений</li>
            <li>Разработка договоров</li>
        </ul>
    </div>
</div>
<div className="right">
    <label htmlFor="extra">Дополнительная информация</label>
    <textarea name="extra" id="extra" placeholder="Введите текст ..."></textarea>
</div>
                    <button className="main-btn">Отправить</button>
                </form>
                </div>
            </section>
        );
    }
}

export default Feedbackform;
