import { Component } from "react";
class TesterTest extends Component{
    constructor(props){
        super(props);

    }
    render(){
        const mno="hello from the other side";
        return(
            <div>
                <h1> what is this {mno}</h1>
            </div>
        );


    }
}
export default TesterTest;