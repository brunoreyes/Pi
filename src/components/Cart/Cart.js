import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Cart extends Component {

    render() {
        return (
            <div>
                <h2>Cart Page!!</h2>
                {/*  */}
            </div>
        )
    }
}

export default connect()(Cart);