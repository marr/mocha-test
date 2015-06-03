var React = require('react');
var newforms = require('newforms');
module.exports = React.createClass({
    render: function() {
        var form = newforms.Form.extend();
        var newform = <newforms.RenderForm form={form} />;
        return <form {...this.props}>{newform}</form>;
    }
});
