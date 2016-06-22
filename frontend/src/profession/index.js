import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Col} from 'react-bootstrap'


export default class Profession extends Component {

    render = () => {
        console.log(this.props.home);
        return (
            <Col xs={12} componentClass="section">
                Here is a profession page for { this.props.home.title }
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        home: state.home
    }
}

export default connect(mapStateToProps)(Profession);