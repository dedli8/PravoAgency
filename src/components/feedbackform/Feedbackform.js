import React, {Component} from 'react';
import Sectiontitle from "../sectiontitle/Sectiontitle";

class Feedbackform extends Component {
    state={
        title: "запрос на услуги",
        key: 9
    };
    toggleTopicBox = (e) => {
        if(e.target.nextElementSibling.style.display == "") {
            e.target.nextElementSibling.style.display = "block";}
            else if(e.target.nextElementSibling.style.display == "none") {
                e.target.nextElementSibling.style.display = "block";
        }else if(e.target.nextElementSibling.style.display == "block"){
            e.target.nextElementSibling.style.display = "none";
        }
    };
    render() {
        const {title, key} = this.state;
        return (
            <section className="feedback" id='feedbackform'>
<Sectiontitle title ={title}  key={key}/>
                <div className="container"><form className="form">
<div className="left">
    <div className="inputs-wrap">
    <input type="text" placeholder='имя*'/><input type="text" placeholder="телефон*"/><input type="text" placeholder="e-mail*"/><input type="text" placeholder="сайт"/>
    </div>
    <div className="topic-box">
        <p className="title" onClick={this.toggleTopicBox.bind(this)}>
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
