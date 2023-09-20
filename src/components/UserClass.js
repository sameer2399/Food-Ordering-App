import React from 'react';
import { useState } from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "dummy",
                location: "dummy",
                avatar_url:"dummy"


            }
        };
        //console.log(this.props.name+"Child constructor");
    }

    async componentDidMount() {
        //console.log("Parent componentDidMount");
        const data = await fetch("https://api.github.com/users/sameer2399");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })

        console.log(json);
    }

componentDidUpdate() {
    console.log("componentDidUpdate");
}

componentWillUnmount() {
    console.log("componentWillUnmount");
}

    render() {

        //console.log(this.props.name+"Child render");
        const { name, location, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} alt="" />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @sameeranand23</h4>
            </div>
        )
    }
}

export default UserClass;