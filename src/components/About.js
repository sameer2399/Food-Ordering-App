import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        
        //console.log("Parent constructor");
    }


  

    render() {

        //console.log("Parent render");

    return (
        <div className="about">
            <h1>About Us</h1>
            <h2>This is namaste react web series</h2>
            <div>
                Logged In User:
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="text-xl font-bold"> {loggedInUser} </h1>}
                </UserContext.Consumer>
            </div>
            {/* <User name={"Sameer"} location={"Bangalore"}/> */}
            <UserClass name="First" location="Bangalore"/>
        </div>
    );
};

}

export default About;