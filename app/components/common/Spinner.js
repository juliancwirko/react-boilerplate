import React from 'react';
import CSSModules from 'react-css-modules';
import style from './styles';

class Spinner extends React.Component {
    componentDidMount() {
        // just for testing
    }
    render() {
        return (
            <div styleName='cube-grid'>
                <div styleName='cube1'></div>
                <div styleName='cube2'></div>
                <div styleName='cube3'></div>
                <div styleName='cube4'></div>
                <div styleName='cube5'></div>
                <div styleName='cube6'></div>
                <div styleName='cube7'></div>
                <div styleName='cube8'></div>
                <div styleName='cube9'></div>
            </div>
        )
    }
}

export default CSSModules(Spinner, style);
