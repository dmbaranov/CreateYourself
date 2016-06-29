/* eslint-disable */
import React, { Component } from 'react'
import { Col, Tabs, Tab } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import * as actions from './actions.js'

export default class ProfessionMap extends Component {

    componentDidMount = () => {
        if (this.props.home.profession === '') {
            //browserHistory.push('/');
        }
        else {
            var center = {lat: 66.25, lng: 94.15}; 

            var map = new google.maps.Map(document.getElementById('map'), { // won't appear again because componentDidMount calls once
                center: {lat: -34.397, lng: 150.644},
                zoom: 8
            });
        }
    }

    render = () => {
        return (
            <Col xs={12} componentClass="div" className="prof-map">
            	<Col xs={5} componentClass="div" className="prof-map__menu">
                    <Tabs className="prof-map__menu__tabs">
                        <Tab id="prof-map__tab-1" eventKey={1} title="ВУЗы">Здесь идут вузы</Tab>
                        <Tab id="prof-map__tab-1" eventKey={2} title="Колледжи">Здесь идут колледжи</Tab>
                        <Tab id="prof-map__tab-1" eventKey={3} title="Курсы">Здесь идут курсы</Tab>
                    </Tabs>
            	</Col>
            	<Col xs={7} componentClass="div" className="prof-map__map" id="map">
            	</Col>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        home: state.home,
        profMap: state.profMap
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionMap);