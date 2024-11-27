import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_info: {
                html_url: "dummyurl",
                login: "dummylogin",
                public_repos: "dummypublic_repos",
                followers: "dummyfollowers",
                avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
            }
        };
    }

    async componentDidMount() {

        const{nameid} = this.props;
        
        const data = await fetch("https://api.github.com/users/"+nameid);
        const json = await data.json();
        
        this.setState({
            user_info: json,
        });

    }

    render() {
        const { html_url, login, public_repos, followers, avatar_url } = this.state.user_info;
        //const formattedLogin = login.replace(/-/g, " ");

        return (
            <div className="user-card">
                <img className="profile_img" src={avatar_url} alt="Profile" />
                <div className="user-info">
                    <h2>Name: {login}</h2>
                    <h4>Address: Pune</h4>
                    <h4>Projects: {public_repos}</h4>
                    <h4>Followers: {followers}</h4>
                    <h4>Github Profile: <a href={html_url} target="_blank" rel="noopener noreferrer">{html_url}</a></h4>
                </div>
            </div>
        );
    }
}

export default UserClass;