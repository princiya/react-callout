import React, { Component } from 'react';
import Callout from 'react-callout';
import { connect } from 'react-redux';
import * as actions from './action-creators';

class CalloutExample extends Component {
    render() {
        const content = (
            <div className="content">
                CALLOUT CONTENT
            </div>
        );

        return (
            <Callout
                className="callout"
                isOpen={this.props.isCalloutOpen}
                position="top"
                alignment="right"
                offset={{x: '-20px', y: '-10px'}}
                content={content}
            >
                <button onClick={() => this.props.dispatch(actions.toggle())}>
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
