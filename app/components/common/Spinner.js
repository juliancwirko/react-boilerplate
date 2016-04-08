import React from 'react';
import style from './styles';

class Spinner extends React.Component {
    componentDidMount() {
        // just for testing
    }
    render() {
        return (
            <div className={style.cubeGrid}>
                <div className={style.cube1}></div>
                <div className={style.cube2}></div>
                <div className={style.cube3}></div>
                <div className={style.cube4}></div>
                <div className={style.cube5}></div>
                <div className={style.cube6}></div>
                <div className={style.cube7}></div>
                <div className={style.cube8}></div>
                <div className={style.cube9}></div>
            </div>
        )
    }
}

export default Spinner;
