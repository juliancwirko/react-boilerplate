jest.dontMock('../app/components/common/Spinner');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Spinner = require('../app/components/common/Spinner').default;

describe('Spinner', () => {
    it('checks proper amount of child nodes', () => {
        var spinner = TestUtils.renderIntoDocument(
          <Spinner />
        );
        var spinnerNode = ReactDOM.findDOMNode(spinner);
        expect(spinnerNode.childNodes.length).toEqual(9);
    });
});