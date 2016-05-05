import React from 'react';
import _ from 'lodash';
import {Router} from 'react-router';
import CSSModules from 'react-css-modules';
import style from './styles';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHome: true
        }
    }
    init() {
        this.setState({
            isHome: this.context.router.isActive('/', true)
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
                <header styleName='header'>
                    <div styleName='container'>
                        <span>Demo App: </span>
                        {this.state.isHome ? <span>This is homepage </span> : <span>This is subpage</span>}
                    </div>
                </header>
                <section>
                    <div styleName='container'>
                        {this.props.children}
                    </div>
                </section>
            </div>
        )
    }
}

Main.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default CSSModules(Main, style);
