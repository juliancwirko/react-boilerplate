import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
    render() {
        return (
            <div className="custom-grid">
                <div className="custom-cell">
                    <Link to='route-1' params={{username: 'user-1'}}>
                        User 1
                    </Link>
                </div>
                <div className="custom-cell">
                    <Link to='route-1' params={{username: 'user-2'}}>
                        User 2
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home;
