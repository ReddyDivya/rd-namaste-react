import React from "react";
import User from "./User";


// const About = () => {
//     return (
//     <div className="about">
//         <h2>About us</h2>
//         <User name={"Divya"} location={"Hyderabad"}/>
//     </div>)
// }

// export default About;

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent's constructor.");
    }

    componentDidMount(){
        console.log("Parent's did mount.");
    }

    render(){
        console.log("Parent's render.");

        return( 
            <div className="about">
                <h2>About us</h2>
                <User child={"First"} name={"Divya"} location={"Hyderabad"}/>
                <User child={"Second"} name={"Divya"} location={"Hyderabad"}/>
               </div>
            )
    }
}

export default About;