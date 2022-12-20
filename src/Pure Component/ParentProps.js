import React,{PureComponent} from "react";
import Props from "./PureComponent_with_props";

//Main Component
class Parent extends PureComponent{
    constructor()
    {
        super();
        this.state={
            count:1
        }
    }
    render()
    {
        return(
            <div>     
                {/* data send to PureComponent_with_props.js */}
                <Props count={this.state.count}/>
                {/* setState increases */}
                <button onClick={()=>this.setState({count:this.state.count+1})}>Update props</button>
            </div>
        )
    }
}

export default Parent;