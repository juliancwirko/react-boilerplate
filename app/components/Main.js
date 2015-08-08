import React from 'react';
import _ from 'lodash';

import {Router, RouteHandler} from 'react-router';

class Main extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="container">
                        Demo App
                    </div>
                </header>
                <section>
                    <div className="container">
                        <RouteHandler {...this.props} />
                    </div>
                </section>
            </div>
        )
    }
}

export default Main;
