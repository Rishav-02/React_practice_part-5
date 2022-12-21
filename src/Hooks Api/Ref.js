/* When to Use Refs

There are a few good use cases for refs:

1. Managing focus, text selection, or media playback.
2. Triggering imperative animations.
3. Integrating with third-party DOM libraries.

Avoid using refs for anything that can be done declaratively.

For example, instead of exposing open() and close() methods on a Dialog component, pass an isOpen prop to it.

*/

/* Important Points:-

1. Refs are an escape hatch to hold onto values that aren’t used for rendering. You won’t need them often.
2. A ref is a plain JavaScript object with a single property called current, which you can read or set.
3. You can ask React to give you a ref by calling the useRef Hook.
4. Like state, refs let you retain information between re-renders of a component.
5. Unlike state, setting the ref’s current value does not trigger a re-render.
6. Don’t read or write ref.current during rendering. This makes your component hard to predict.   */

// Refs are created using React.createRef() and attached to React elements via the ref attribute. Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.     When a ref is passed to an element in render, a reference to the node becomes accessible at the current attribute of the ref.

import React,{createRef} from "react";

//Ref is directly used only in class Component and to use Ref in functional component useRef Hook is used.
class Ref extends React.Component{
    constructor()
    {
        super();
        //Creating Refs Syntax
        this.inputRef=createRef();
    }
    componentDidMount()
    {
        console.warn(this.inputRef);
        console.warn(this.inputRef.current.value="Rishav");//set value to Rishav
    }

    //Click button to call getVal function
    getVal()
    {
       console.warn(this.inputRef.current.value);//current is a property.    write data in input field then click button to get that data in console

       //text color and background changes
       this.inputRef.current.style.color="Red";
       this.inputRef.current.style.backgroundColor="yellow";
    }
    render()
    {
        return(
            <div>
                <h3>Ref in React</h3>
                {/* When you pass a ref to a ref attribute in JSX, like <div ref={myRef}>, React will put the corresponding DOM element into myRef.current.  */}
                <input type="text" ref={this.inputRef}/>
                <button onClick={()=>this.getVal()}>Check Ref</button>
            </div>
        )
    }    
    
}

export default Ref;


// Gfg example:
// import React from "react";
// class Ref extends React.Component {
//     constructor(){
//      super();
//      this.state = { sayings: ""};
//      }
//     update(e){
//      this.setState({ sayings: e.target.value});
//     }
//     render(){
//      return (
//       <div>
//        Mukul Says <input type="text" onChange = {this.update.bind(this)}/>
//       <br/>
//       <em>{this.state.sayings}</em>
//      </div>
//     );
//    }
//   }

// export default Ref;
