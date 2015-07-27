var React = require('react');

var Home = React.createClass({
    render: function () {
        return (
            <div className="custom-grid">
                <div className="custom-cell"><a href="./index.html#/route-1/user-1">User 1</a></div>
                <div className="custom-cell"><a href="./index.html#/route-1/user-2">User 2</a></div>
            </div>
        )
    }
});

module.exports = Home;