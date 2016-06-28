/* eslint-disable */
import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import * as actions from './actions.js'

const professionsJSON = [
    {
        type: 'programmer',
        title: 'Программист'
    },
    {
        type: 'sailor',
        title: 'Моряк'
    },
    {
        type: 'linguist',
        title: 'Лингвист'
    }
];

export default class Home extends Component {

    onProfessionClick = (prof, e) => {
        this.props.actions.onProfessionClick(prof);
        browserHistory.push('/profession/' + prof);
    }

    render = () => {

        let professions = professionsJSON.map((item, number) => {
            return (
                <Col key={number} xs={3} componentClass="div" className="prof-buttons__button" onClick={this.onProfessionClick.bind(this, item.type)}>
                    {item.title}
                </Col> 
            )
            /*return (
                <Col key={number} xs={3} componentClass="div">
                    <div className="prof-buttons__button">{item.title}</div>
                    <div className="prof-buttons__tooltip">
                        <ul>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                        </ul>
                    </div>
                </Col>
            )*/
        });

    	return (
    		<Col xs={12} componentClass="div" className="home">
                <Col xs={5} componentClass="div" className="home__slogan">
                    {/*<Col xs={12} componentClass="div" className="home__slogan__title">Создай себя</Col>
                    <Col xs={12} componentClass="div" className="home__slogan__text">
                        Приберегите свои силы и время для освоения новой профессии, а мы поможем сориентироваться в мире профессий и расскажем все о работе вашей мечты
                    </Col>*/}
                    <div className="home__slogan__title">Создай себя</div>
                    <div className="home__slogan__text">
                        Приберегите свои силы и время для освоения новой профессии, а мы поможем сориентироваться в мире профессий и расскажем все о работе вашей мечты
                    </div>
                </Col>
                <Col xs={12} componentClass="div" className="home__prof-buttons">
                    {professions}
                </Col>
    		</Col>
    	)
    };

}

function mapStateToProps(state) {
    return {
        home: state.home
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);