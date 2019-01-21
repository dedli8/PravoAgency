import React, {Component} from 'react';
import Sectiontitle from '../sectiontitle/Sectiontitle'
import Service from './service/Service';
import Case from './icons/Case.js'
import Optimization from './icons/Optimization.js'
import Court from './icons/Court.js';
import Outsource from './icons/Outsource.js';

class Services extends Component {
    state = {
        services: [
            {
                id: 1,
                icon: <Case/>,
                title: "наведение порядка в делах",
                contentTitle: 'Аудит документов и платежей на предмет:',
                contentList: ["соблюдения необходимых формальностей и процедур,",
                    "наличия всех оригиналов договоров, актов,",
                    "легализация зависших платежей."]
            },
            {
                id: 2,
                icon: <Optimization/>,
                title: "Оптимизация договорных отношений",
                contentTitle: '',
                contentList: [" Доработка, латание дыр и улучшение условий основных типовых договоров вашей компании",
                    "Оформление сотрудников на оптимальных условиях ведения деятельности и налогообложения",
                    "Составление договоров, соглашений о конфиденциальности, публичных офферт"]
            },
            {
                id: 3,
               icon: <Outsource/>,
                title: "Правовое сопровождение деятельности (юрист-аутсорсер)",
                contentTitle: '',

                contentList:
                    ["Участие в заключении договоров: минимизация рисков, усиление ваших позиций",
                    "Юридическая консультация",
                    "Дайджест предпринимательских ИТ-новостей с разъяснениями", "Представительство интересов в судах"]
            },
            {
                id: 4,
                icon: <Court/>,
                title: "Разработка договоров и другой документации",
                contentTitle: 'К сожалению, конфликты бывают в любой сфере. Если дело близится к суду или уже дошло до него, мы поможем отстоять ваши права и интересы.',
                contentList: []
            }
        ],
        titledata:{
            title: "Услуги и цены",
            description: "выполняет роль юристов-аутсорсеров, надежно прикрывая",
            strong: "Pravo agency"
        },
    };
    render() {
        const {services} = this.state;
        const {title, description, strong} = this.state.titledata;
        return (
            <section className="services">
                <Sectiontitle title = {title} description = {description} strong={strong}/>
                <div className="container">
                    <div className="services-wrap">
                            {services.map(service =>
                                (<Service service={service}/>))}
                </div>
                </div>
                <div className="line-throw"></div>
            </section>

        );
    }
}

Services.propTypes = {};

export default Services;
