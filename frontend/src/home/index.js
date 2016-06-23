/* eslint-disable */
import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import * as actions from './actions.js'

import './style.scss'

export default class Home extends Component {

    componentDidMount = () => {
        this.props.actions.changeDataToShow(professionsJSON);
    }

	onProfessionClick = (profButton) => {
		this.props.actions.setProfession(profButton);
        browserHistory.push('/' + profButton.profession);
	}

    render = () => {

        let professions = this.props.home.dataToShow.map((item, number) => {
            let itemClass = 'home__body__prof-button prof-button--color-' + (number + 1);

            return (
                <div key={number} className={itemClass} onClick={ this.onProfessionClick.bind(this, item)}>{item.title}</div>
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