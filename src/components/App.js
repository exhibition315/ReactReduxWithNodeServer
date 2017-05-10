import React from 'react';
import PropTypes from 'prop-types';
import configHelper from '../config/configHelper.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        configHelper.init(configHelper.category.Production);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object,
}