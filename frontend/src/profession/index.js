/* eslint-disable */
import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import * as actions from './actions.js'

const programmerSpecializationJSON = [
    {
        specialization: 'web-developer',
        specializationTitle: 'Веб-разработчик',
        specializationDescription: 'Веб-разработчик занимается разработкой сайтов и веб приложений.',
        subProfessions: [
            {
                subProfession: 'frontend-developer',
                subProfessionTitle: 'Frontend-разработчик'
            },
            {
                subProfession: 'backend-developer',
                subProfessionTitle: 'Backend-разработчик'
            }
        ]
    },
    {
        specialization: 'desktop-developer',
        specializationTitle: 'Десктоп-разработчик',
        specializationDescription: 'Десктоп-разработчик занимается разработкой приложений для компьютерных операционных систем, включая драйвера, ПО и тп.',
    },
    {
        specialization: 'mobile-developer',
        specializationTitle: 'Разработчик мобильных приложений',
        specializationDescription: 'Разработчик мобильных приложением занимается разработкой приложений для операционных систем Android и iOS',
        subProfessions: [
            {
                subProfession: 'android-developer',
                subProfessionTitle: 'Android разработчик'
            },
            {
                subProfession: 'ios-developer',
                subProfessionTitle: 'iOS разработчик'
            }
        ]
    }

];

export default class Profession extends Component {

    componentDidMount = () => {
        if (this.props.home.profession === '') {
            browserHistory.push('/');
        }
        else {
            document.querySelector('.profession').className = 'profession profession--background-' + this.props.home.profession;
        }
    }

    onSpecializationClick = (profession, title) => {
        browserHistory.push(`/profession/${profession}/description`);
        this.props.actions.onSpecializationClick(title);
    }

    render = () => {
        let specializations;

        if (this.props.home.profession === 'programmer') {

            specializations = programmerSpecializationJSON.map((item, number) => {
            
                let specButtons;
                if (typeof item.subProfessions !== 'undefined') {
                    specButtons = item.subProfessions.map((subProfItem, subProfNumber) => {
                        return (
                            <Col key={subProfNumber} xs={12} componentClass="div" className="specialization__button" onClick={this.onSpecializationClick.bind(this, subProfItem.subProfession, subProfItem.subProfessionTitle)}>
                                {subProfItem.subProfessionTitle}
                            </Col>
                        )
                    });
                }
                else {
                    specButtons = <Col xs={12} componentClass="div" className="specialization__button" onClick={this.onSpecializationClick.bind(this, item.specialization)}>{item.specializationTitle}</Col>
                }

                return (
                    <Col key={number} xs={3} componentClass="div" className="profession-list__specialization">
                        <Col xs={12} componentClass="div" className="specialization__title">{item.specializationTitle}</Col>
                        <Col xs={12} componentClass="div" className="specialization__description">{item.specializationDescription}</Col>
                        <Col xs={12} componentClass="div" className="specialization__buttons-list">
                            {specButtons}
                        </Col>
                    </Col>
                )
            });
        }

        return (
            <Col xs={12} componentClass="div" className="profession">
                <Col xs={12} componentClass="div" className="profession__profession-title">Программист</Col>
                <Col xs={12} componentClass="div" className="profession__professions-list">
                    {specializations}
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