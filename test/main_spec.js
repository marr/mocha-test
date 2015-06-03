var App = require('../app/main');
var TestUtils = require('react/lib/ReactTestUtils');
var React = require('react');
var expect = require('expect');

var wasSubmitted;

function handleOnSubmit(e) {
    e.preventDefault();
    wasSubmitted = true;
}

function render() {
    return TestUtils.renderIntoDocument(App, { onSubmit: handleOnSubmit });
}

describe("submitting a form", function() {
    it("calls its onSubmit handler", function() {
        app = render();
        var form = React.findDOMNode(app);
        TestUtils.Simulate.submit(form);
        expect(wasSubmitted).toBe();
    });
});
