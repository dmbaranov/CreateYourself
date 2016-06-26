import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import NavigationLink from '../navigationLink/'

import './style.scss'

export default class App extends Component {

    render = () => {
        return (
            <Grid componentClass="div" fluid={true}>
                <Row componentClass="div">
                    <Col xs={12} componentClass="div" className="app__header">
                        <Col xs={3} componentClass="div" className="app__logo"/>
                        <Col xs={8} xsOffset={1} componentClass="nav" className="app__header__navigation">
                            <NavigationLink onlyActiveOnIndex={true} to="/">Главная</NavigationLink>
                            <NavigationLink onlyActiveOnIndex={true} to="/professions">Профессии</NavigationLink>
                            <NavigationLink onlyActiveOnIndex={true} to="/about-team">О команде</NavigationLink>
                            <NavigationLink onlyActiveOnIndex={true} to="/about-project">О проекте</NavigationLink>
                        </Col>
                    </Col>
                    <Col xs={12} componentClass="div" className="app__content">
                        {this.props.children}
                    </Col>
                </Row>
            </Grid>
        )
    }
}