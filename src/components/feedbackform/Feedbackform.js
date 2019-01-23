import React, {Component} from 'react';
import Mainheader from "../mainheader/Mainheader";

class Feedbackform extends Component {
    state={
        title: "запрос на услуги",
        key: 9
    };
    render() {
        const {title, key} = this.state;
        return (
            <section className="feedback" id='feedbackform'>
<Mainheader title ={title} key={key}/>
                <div className="container"><form className="form">
<div className="left">
    <div className="inputs-wrap">
    <input type="text" placeholder='имя*'/><input type="text" placeholder="телефон*"/><input type="text" placeholder="e-mail*"/><input type="text" placeholder="сайт"/>
    </div>
    <div className="topic-box">
        <p className="main-title">
            МЕНЯ ИНТЕРЕСУЕТ <span className="arrow">&#10140;</span></p>
        <div className="topic-list">
            <label className="checkbox-wrap">Наведение порядка в делах
                <input type="checkbox"></input>
                    <span className="checkmark"></span>
            </label>
            <label className="checkbox-wrap">Правовое сопровождение деятельности
                <input type="checkbox"></input>
                    <span className="checkmark"></span>
            </label>
            <label className="checkbox-wrap">Оптимизация договорных отношений
                <input type="checkbox"></input>
                    <span className="checkmark"></span>
            </label>
            <label className="checkbox-wrap">Разработка договоров
                <input type="checkbox"></input>
                    <span className="checkmark"></span>
            </label>
        </div>
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
