/* How does forwardRef work in React?

In React, parent components typically use props to transfer data down to their children. Consider you make a child component with a new set of props to change its behavior. We need a way to change the behavior of a child component without having to look for the state or re-rendering the component. We can do this by using refs. We can access a DOM node that is represented by an element using refs. As a result, we will make changes to it without affecting its state or having to re-render it.

When a child component needs to refer to its parent’s current node, the parent component must have a way for the child to receive its ref. The technique is known as ref forwarding.
 
*/

import React from "react";

//here pass two parameters first 'props' and second 'childref'(may be anything) is used to receive data from parent
function Forward(props,childref){
    return(
        <div>
        {/* receive data from parent component */}
            <input type="text" ref={childref}/>
        </div>
    )
}

//Syntax to use forwardRef
export default React.forwardRef(Forward);