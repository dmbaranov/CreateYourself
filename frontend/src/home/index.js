/* eslint-disable */
import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import * as actions from './actions.js'

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
        title: 'Программист'
    },
    {
        profession: 'linguist',
        title: 'Лингвист'
    }
];

export default class Home extends Component {

	onProfessionClick = (profession, title) => {
        console.log(title);
		this.props.actions.setProfession(profession, title);
        browserHistory.push('/' + profession);
	}

    render = () => {

        let professions = professionsJSON.map((item, number) => {
            let itemClass = 'home__body__prof-button prof-button--color-' + (number + 1);

            return (
                <div key={number} className={itemClass} onClick={ this.onProfessionClick.bind(this, item.profession, item.title)}>{item.title}</div>
            )
        });

    	return (
    		<Col componentClass="div" className="home" xs={12}>
    			<Col componentClass="div" className="home__logo" xs={12}></Col>
    			<Col componentClass="div" className="home__body" xs={12}>
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