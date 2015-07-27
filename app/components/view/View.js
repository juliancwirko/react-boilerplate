var React = require('react');
var Router = require('react-router');

var View = React.createClass({
    mixins: [Router.State],
    render: function () {
        var username = this.getParams().username;
        return (
            <div className="view">
                {username}
            </div>
        )
    }
});

module.exports = View;