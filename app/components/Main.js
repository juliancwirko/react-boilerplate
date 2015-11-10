import React from 'react';
import _ from 'lodash';
import {Router} from 'react-router';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHome: true
        }
    }
    init() {
        this.setState({
            isHome: this.props.history.isActive('/', {}, true)
        });
    }
    componentDidMount() {
        this.init();
    }
    componentWillReceiveProps() {
        this.init();
    }
    render() {
        return (
            <div>
                <header className="header">
                    <div className="container">
                        <span>Demo App: </span>
                        {this.state.isHome ? <span>
                            This is homepage
                        </span> : <span>This is subpage</span>}
                    </div>
                </header>
                <section>
                    <div className="container">
                        {this.props.children}
                    </div>
                </section>
            </div>
        )
    }
}

export default Main;
