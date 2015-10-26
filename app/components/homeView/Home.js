import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
    render() {
        // demo purposes
        let users = {
            user1: 'user-1',
            user2: 'user-2'
        };
        return (
            <div className="custom-grid">
                <div className="custom-cell">
                    <Link to={`/route-1/${users.user1}`}>
                        User 1
                    </Link>
                </div>
                <div className="custom-cell">
                    <Link to={`/route-1/${users.user2}`}>
                        User 2
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home;
