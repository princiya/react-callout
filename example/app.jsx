import React, { Component } from 'react';
import CalloutExample from './callout-example.jsx';
import { Provider } from 'react-redux';

export default class App extends Component {
    render() {
        return (
            <Provider store={ this.props.store }>
                <CalloutExample />
            </Provider>
        );
    }
};
