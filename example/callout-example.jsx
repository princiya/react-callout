import React, { Component } from 'react';
import Callout from 'react-callout';
import { connect } from 'react-redux';
import * as actions from './action-creators';

class CalloutExample extends Component {
    constructor() {
        super();

        this.getMousePosition = this.getMousePosition.bind(this);
    }

    getMousePosition(e) {
        this.props.dispatch(actions.toggle({clientX: e.clientX, clientY: e.clientY}));
    }

    render() {
        const content = (
            <div className="content">
                CALLOUT CONTENT
            </div>
        );

        return (
            <Callout
                className="callout"
                isOpen={this.props.isCalloutOpen.isOpen}
                position="top"
                alignment="left"
                offset={{x: '-20px', y: '-10px'}}
                content={content}
                clientX={this.props.isCalloutOpen.clientX}
                clientY={this.props.isCalloutOpen.clientY}
            >
                <button onClick={this.getMousePosition}>
                    I have a callout
                </button>
            </Callout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isCalloutOpen: state
    };
};

export default connect(mapStateToProps)(CalloutExample);
