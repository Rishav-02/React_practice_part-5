/* Normally, All components always render on every run but if previous value of state or props and the new value of state or props is the same then the component will not re-render itself thats why we use PureComponent to restrict re-rendering when state or props are same */

import React,{PureComponent} from "react";

class State extends PureComponent{
    constructor()
    {
        super();
        this.state={
            count:1
        }
    }
    render()
    {
        console.warn("check re-render for state");
        return(
            <div>
                <h3>Pure Component with state in React {this.state.count}</h3>
                {/* To update use count:this.state.count+1 */}
                <button onClick={()=>this.setState({count:1})}>Update state</button>
            </div>
        )
    }
}

export default State;