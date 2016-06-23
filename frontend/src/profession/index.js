/* eslint-disable */
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {Col} from 'react-bootstrap'

import * as actions from './action.js'

import './style.scss'

const professionsJSON = [
    {
        profession: 'pilot',
        title: 'Пилот'
    },
    {
        profession: 'sailor',
        title: 'Моряк'
    },
    {
        profession: 'programmer',
        title: 'Программист',
        subProfessions: [
            {
                profession: 'programmer-web',
                title: 'Веб-разработчик',
                subProfessions: [
                    {
                        profession: 'web-backend',
                        title: 'Бэкенд-разработчик'
                    },
                    {
                        profession: 'web-frontend',
                        title: 'Фронтенд-разработчик'
                    }
                ]
            },
            {
                profession: 'programmer-desktop',
                title: 'Десткоп-программист'
            },
            {
                profession: 'programmer-mobile',
                title: 'Разработчик мобильных систем',
                subProfessions: [
                    {
                        profession: 'mobile-android',
                        title: 'Разработчик под Android'
                    },
                    {
                        profession: 'mobile-ios',
                        title: 'Разработчик под iOS'
                    }
                ]
            }
        ]
    },
    {
        profession: 'linguist',
        title: 'Лингвист'
    }
];


export default class Profession extends Component {

    componentDidMount = () => {
        //this.props.actions.changeDataToShow(this.props.home.dataToShow);
        this.props.actions.changeDataToShow(professionsJSON);
    }

    onProfessionClick = (profButton) => {
        this.props.actions.setProfession(profButton);
        browserHistory.push('/profession/' + profButton.profession);
    }

    render = () => {
        
        let professions = this.props.profession.dataToShow.map((item, number) => {
            let itemClass = 'profession__body__prof-button prof-button--color-' + (number + 1);

            return (
                <div key={number} className={itemClass} onClick={ this.onProfessionClick.bind(this, item)}>{item.title}</div>
            )
        });

        if (this.props.profession.dataToShow.length === 0 && this.props.profession.profession !== '') {
            browserHistory.push('/profession-variants');
        }

        return (
            <Col xs={12} componentClass="section" className="profession">
                <Col xs={12} componentClass="div" className="profession__body">
                    {professions}
                </Col>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        home: state.home,
        profession: state.profession
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profession);