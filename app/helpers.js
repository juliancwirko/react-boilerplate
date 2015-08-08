import axios from 'axios';

//
// get user info by user name
// this is an example of usage the anxios library
// remember to provide your GitHub token credentials
//

var getUserInfo = (username) => {
    return axios.get(`https://api.github.com/users/${username}`, {
        headers: {
            'Authorization': 'token [your github token here]'
        }
    });
};

// get user repos by user name
var getUserRepos = (username) => {
    return axios.get(`https://api.github.com/users/${username}/repos?per_page=100`, {
        headers: {
            'Authorization': 'token [your github token here]'
        }
    });
};

var helpers = {
    getGitHubUserData(username) {
        return axios.all([getUserInfo(username), getUserRepos(username)])
            .then((result) => {
                return {
                    userInfo: result[0].data,
                    userRepos: result[1].data
                }
            });
    }
};

export default helpers;