import React from 'react';

class User extends React.Component{
    constructor(props){
        super(props);

        //state variables
        this.state = {
            count1 : 0,
            count2 : 2,
        }
    }

    render(){
        return ( 
            <div>
                <h2>{this.props.name}</h2>
                <h2>{this.props.location}</h2>
                <h2>{this.state.count1}</h2>
                <h2>{this.state.count2}</h2>
                <button onClick={() => {
                    this.setState({ 
                        count1 : this.state.count1 + 1,
                        count2 : this.state.count2 + 2,
                    });
                }}>
                    Click</button>
            </div>
        )
    }
}

export default User;