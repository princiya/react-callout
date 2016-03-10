import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import Callout from './callout.jsx';

function getCalloutMock(opts) {
    const defaultOpts = {
        props: {},
        children: ['ELEMENT_WITH_CALLOUT']
    };
    const options = Object.assign({}, defaultOpts, opts);

    return shallow(
        React.createElement(Callout, options.props, options.children)
    );
}

test('should have 1 callout_wrapper node', t => {
    const callout = getCalloutMock();

    t.is(callout.find('.callout_wrapper').length, 1);
});

test('should have 1 callout_trigger node', t => {
    const callout = getCalloutMock();

    t.is(callout.find('.callout_trigger').length, 1);
});

test('should have 1 callout_content node', t => {
    const callout = getCalloutMock();

    t.is(callout.find('.callout_content').length, 1);
});

test('should contain "ELEMENT_WITH_CALLOUT"', t => {
    const callout = getCalloutMock();

    t.regex(callout.html(), /ELEMENT_WITH_CALLOUT/);
});
