var React = require('react');
var Router = require('react-router');
var _ = require('lodash');
var RouteHandler = require('react-router').RouteHandler;

var Main = React.createClass({
    mixins: [Router.State],
    getInitialState: function () {
        return {
            isHome: false
        }
    },
    init: function () {
        this.setState({
            isHome: _.isEmpty(this.getParams())
        });
    },
    componentDidMount: function () {
        this.init();
    },
    componentWillReceiveProps: function () {
        this.init();
    },
    render: function () {
        return (
            <div>
                <header className="header">
                    <div className="container">
                        {this.state.isHome ? <div>
                            This is homepage
                        </div> : <div>This is subpage</div>}
                    </div>
                </header>
                <section>
                    <div className="container">
                        <RouteHandler />
                    </div>
                </section>
            </div>
        )
    }
});

module.exports = Main;
