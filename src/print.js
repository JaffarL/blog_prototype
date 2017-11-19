// export default function printMe() {
//     console.log('Updating print.js qwejs asdgishasdasded');
// }
import React from "react";

class HelloMessage extends React.Component{
    constructor(){
        super();
        this.state={
            name:'lyz'
        }
    }
    render(){
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}

class WorldMessage extends React.Component{
    constructor(){
        super();
        this.state={
            name:'xyqxyqxyq'
        }
    }
    render(){
        return (
            <div>
                Hello!{this.state.name}
            </div>
        )
    }
}

export  class Message extends React.Component{
    render(){
        return (
            <div>
                <HelloMessage/>
                <WorldMessage/>
            </div>
        )
    }
}
