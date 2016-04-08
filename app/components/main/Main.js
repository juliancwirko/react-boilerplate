import React from 'react';
import _ from 'lodash';
import {Router} from 'react-router';
import style from './styles';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHome: true,
            counter: 0
        }

    }
    init() {
        this.setState({
            isHome: this.context.router.isActive('/', true)
        });
    }
    componentDidMount() {
        this.init();
        setInterval(() => {
            this.setState({counter: this.state.counter + 1});
        }, 1000);
    }
    componentWillReceiveProps() {
        this.init();
    }
    render() {
        return (
            <div>
                <header className={style.header}>
                    <div className={style.container}>
                        <span>Demo App: </span>
                        {this.state.isHome ? <span>
                            This is homepage | <span className={style.hmrTest}>For HMR Test</span>: {this.state.counter}
                        </span> : <span>This is subpage</span>}
                    </div>
                </header>
                <section>
                    <div className={style.container}>
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

export default Main;
