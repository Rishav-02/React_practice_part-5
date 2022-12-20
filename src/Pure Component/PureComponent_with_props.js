// In simple words, If the previous value of state or props and the new value of state or props is the same, the component will not re-render itself. Since Pure Components restricts the re-rendering when there is no use of re-rendering of the component. Pure Components are Class Components which extends React.PureComponent. 

import React,{PureComponent} from "react";

//Child Component
class Props extends PureComponent{
    render()
    {
     console.warn("check re-render for props");
        return(
            <div>
            {/* here, data received from parent */}
               <h3>Pure Component with props in React {this.props.count}</h3>
            </div>
        )
    }
}

export default Props;