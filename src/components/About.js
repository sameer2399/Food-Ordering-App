import React from "react";
import User from "./User";
import UserClass from "./UserClass";

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
            {/* <User name={"Sameer"} location={"Bangalore"}/> */}
            <UserClass name="First" location="Bangalore"/>
        </div>
    );
};

}

export default About;