import React from 'react';
import {Router, Link} from 'react-router';

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: '',
            userRepos: ''
        }
    }
    init() {
        //
        // you can get your data from github here see: helpers.js file
        //
        // helpers.getGitHubUserData(this.props.params.username).then((data) => {
        //     this.setState({
        //         userInfo: data.userInfo,
        //         userRepos: data.userRepos
        //     });
        // });
        //
    }
    componentDidMount() {
        this.init();
    }
    render() {
        // username param from router state
        return (
            <div className="view">
                {this.props.params.username} <Link to='/'>[back]</Link>
            </div>
        )
    }
};

export default View;
