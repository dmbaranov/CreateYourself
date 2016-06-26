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
                        <Col xs={6} xsOffset={3} componentClass="nav" className="app__header__navigation">
                            <NavigationLink onlyActiveOnIndex={true} to="/" className="app__navigation__link">Главная</NavigationLink>
                            {/*<NavigationLink onlyActiveOnIndex={true} to="/professions">Профессии</NavigationLink>*/}
                            <NavigationLink onlyActiveOnIndex={true} to="/about-team" className="app__navigation__link">О команде</NavigationLink>
                            <NavigationLink onlyActiveOnIndex={true} to="/about-project" className="app__navigation__link">О проекте</NavigationLink>
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