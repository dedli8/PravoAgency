import React, {Component} from 'react';
import Mainheader from '../mainheader/Mainheader'
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
                    "легализация зависших платежей."],
                modalData: {
                    title: "наведение порядка в делах",
                    text: ["Борьба внутри меня, и я был в самых разных ситуациях в моей жизни.", <strong>Таким образом, борьба, что у меня на постоянной основе, это просто пробовать и быть лучше.</strong>, <br/>, <br/>, "Есть определенная разница между публичным человеком и обычным человеком, это как сойти с ума - для меня во всяком случае - открыть себя целиком для всего мира."],
                    price1: "8000",
                    num1: "< 50",
                    price2: "20000",
                    num2: "25-60",
                    price3: "30000",
                    num3: "> 200",
                    modalStyle: {
                        right:"0",
                        left: "initial"
                    },
                    redLineStyle: {
                        left:"-1px",
                        top: "-25px"
                    },
                    redArrowStyle: {
                        borderWidth:"1px 1px 0 0",
                    }
                }
            },
            {
                id: 2,
                icon: <Optimization/>,
                title: "Оптимизация договорных отношений",
                contentTitle: '',
                contentList: [" Доработка, латание дыр и улучшение условий основных типовых договоров вашей компании",
                    "Оформление сотрудников на оптимальных условиях ведения деятельности и налогообложения",
                    "Составление договоров, соглашений о конфиденциальности, публичных офферт"],
                modalData: {
                    title: "Оптимизация договорных отношений ",
                    text: ["Борьба внутри меня, и я был в самых разных ситуациях в моей жизни.", <strong>Таким образом, борьба, что у меня на постоянной основе, это просто пробовать и быть лучше.</strong>, <br/>, <br/>, "Есть определенная разница между публичным человеком и обычным человеком, это как сойти с ума - для меня во всяком случае - открыть себя целиком для всего мира."],
                    price1: "5000",
                    num1: "< 50",
                    price2: "15000",
                   num2: "50-100",
                    price3: "25000",
                   num3: "> 100",
                    modalStyle: {
                        left:"0",
                    },
                    redLineStyle: {
                        right:"-1px",
                        top: "-25px"
                    },
                    redArrowStyle: {
                        borderWidth:"0 0 1px 1px",
                    }
                }
            },
            {
                id: 3,
               icon: <Outsource/>,
                title: "Правовое сопровождение деятельности (юрист-аутсорсер)",
                contentTitle: '',

                contentList:
                    ["Участие в заключении договоров: минимизация рисков, усиление ваших позиций",
                    "Юридическая консультация",
                    "Дайджест предпринимательских ИТ-новостей с разъяснениями", "Представительство интересов в судах"],
                modalData: {
                    title: "Правовое сопровождение деятельности (юрист-аутсорсер)",
                    text: ["Борьба внутри меня, и я был в самых разных ситуациях в моей жизни.", <strong>Таким образом, борьба, что у меня на постоянной основе, это просто пробовать и быть лучше.</strong>, <br/>, <br/>, "Есть определенная разница между публичным человеком и обычным человеком, это как сойти с ума - для меня во всяком случае - открыть себя целиком для всего мира."],
                    price1: "2000",
                    num1: "< 20",
                    price2: "5000",
                    num2: "50-60",
                    price3: "15000",
                    num3: "> 200",
                    modalStyle: {
                        right:"0",
                        left: "initial"
                    },
                    redLineStyle: {
                        left:"-1px",
                        bottom: "10px"
                    },
                    redArrowStyle: {
                        borderWidth:"1px 1px 0 0",
                    }
                }
            },
            {
                id: 4,
                icon: <Court/>,
                title: "Разработка договоров и другой документации",
                contentTitle: 'К сожалению, конфликты бывают в любой сфере. Если дело близится к суду или уже дошло до него, мы поможем отстоять ваши права и интересы.',
                contentList: [],
                modalData: {
                    title: "Разработка договоров и другой документации",
                    text: ["Борьба внутри меня, и я был в самых разных ситуациях в моей жизни.", <strong>Таким образом, борьба, что у меня на постоянной основе, это просто пробовать и быть лучше.</strong>,<br/>,<br/>,"Есть определенная разница между публичным человеком и обычным человеком, это как сойти с ума - для меня во всяком случае - открыть себя целиком для всего мира."],
                    price1: "3000",
                    num1: "< 10",
                    price2: "5000",
                    num2: "70-100",
                    price3: "23000",
                    num3: "> 300",
                    modalStyle: {
                        left:"0",
                        right: "initial"
                    },
                    redLineStyle: {
                        right:"-1px",
                        bottom: "10px"
                    },
                    redArrowStyle: {
                        borderWidth:"0 0 1px 1px",
                    }
                }
            }
        ],
        titledata:{
            title: "Услуги и цены",
            description: "выполняет роль юристов-аутсорсеров, надежно прикрывая правовой тыл вашей деятельности.",
            strong: "Pravo agency ",
            key: 7
        },
    };
    render() {
        const {services} = this.state;
        const {title, description, strong, key} = this.state.titledata;
        return (
            <section className="services" id="services">
                <Mainheader title = {title} description = {description} strong={strong} key={key} />
                <div className="container">
                    <div className="services-wrap">
                            {services.map((service, index) =>
                                (<Service service={service} key={index}/>))}
                </div>
                </div>
                <div className="line-throw"></div>
            </section>
        );
    }
}

export default Services;
