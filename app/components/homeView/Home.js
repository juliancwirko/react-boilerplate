import React from 'react';
import {Link} from 'react-router';
import file1 from './images/287';
import file2 from './images/286';
import style from './styles';

class Home extends React.Component {
    render() {
        // demo purposes
        let users = {
            user1: 'user-1',
            user2: 'user-2'
        };
        return (
            <div>
                <div className={style.spacing}>
                    <h2>Routing example</h2>
                </div>
                <div className={style.customGrid}>
                    <div className={style.customCell}>
                        <Link to={`/route-1/${users.user1}`}>
                            User 1
                        </Link>
                    </div>
                    <div className={style.customCell}>
                        <Link to={`/route-1/${users.user2}`}>
                            User 2
                        </Link>
                    </div>
                </div>
                <hr />
                <div className={style.spacing}>
                    <h2>...and some kittens - of course</h2>
                </div>
                <div>
                    <img src={file2} alt="Yay, kittens!" />
                    <img src={file1} alt="Yay, kittens! I'll be base64 because I am small" />
                </div>
            </div>
        )
    }
}

export default Home;
