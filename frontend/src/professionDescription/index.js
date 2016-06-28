/* eslint-disable */
import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import * as actions from './actions.js'

const professionAboutJSON = [
	{
		'header': 'Что делает',
		'content': 'Здесь идет описание того, чем занимается данный человек'
	},
	{
		'header': 'Что должен уметь',
		'content': 'Здесь идут требования к данной профессии'
	},
	{
		'header': 'Необходимый бэкграунд',
		'content': 'Здесь описания к человеку'
	}
]

export default class ProfDescription extends Component {

	componentDidMount = () => {
        if (this.props.home.profession === '') {
            browserHistory.push('/');
        }
	}

    render = () => {

    	let aboutProfession = professionAboutJSON.map((item, number) => {
    		return (
    			<div key={number} className="prof-description__list__item">
    				<div className="prof-description__list__header">{item.header}</div>
    				<div className="prof-description__list__content">{item.content}</div>
    			</div>
    		)
    	});

        return (
            <Col xs={12} componentClass="div" className="prof-description">
                <Col xs={8} componentClass="div" className="prof-description__background">
                </Col>
                <Col xs={4} componentClass="div" className="prof-description__menu">
                	<Col xs={9} xsOffset={1} componentClass="div" className="prof-description__menu__title">
                		{this.props.profession.specialization}
                	</Col>
                	<Col xs={9} xsOffset={1} componentClass="div" className="prof-description__menu__list">
                		{aboutProfession}
                	</Col>
                	<Col xs={9} xsOffset={1} componentClass="div" className="prof-description__menu__buttons">
	                	<Col xs={12} componentClass="div" className="prof-description__menu__button">
	                		Где учиться
	                	</Col>
	                	<Col xs={12} componentClass="div" className="prof-description__menu__button">
	                		Карта вакансий
	                	</Col>
                	</Col>
                </Col>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        home: state.home,
        profession: state.profession,
        profDesc: state.profDesc
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfDescription);