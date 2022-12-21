/* 
1. You can mutate the ref.current property. Unlike state, it is mutable. However, if it holds an object that is used for rendering (for example, a piece of your state), then you shouldn’t mutate that object.
2. When you change the ref.current property, React does not re-render your component. React is not aware of when you change it because a ref is a plain JavaScript object.
3. Do not write or read ref.current during rendering, except for initialization. This makes your component’s behavior unpredictable.
4. In Strict Mode, React will call your component function twice in order to help you find accidental impurities. This is development-only behavior and does not affect production. This means that each ref object will be created twice, and one of the versions will be discarded. If your component function is pure (as it should be), this should not affect the logic of your component. 
*/

/* By using a ref, you ensure that:

1. You can 'store information' between re-renders (unlike regular variables, which reset on every render).
2. Changing it 'does not trigger a re-render' (unlike state variables, which trigger a re-render).
3. The 'information is local' to each copy of your component (unlike the variables outside, which are shared).

Changing a ref does not trigger a re-render, so refs are not appropriate for storing information that you want to display on the screen. Use state for that instead. 
 */


//To handle DOM in functional component useRef is used.

//Manipulating the DOM with a ref 
import {useRef} from "react";

function DOM(){
    
//  The inputRef is the useRef object which is initialised to null(initialValue) and the value is changing to onClick event.  
  const inputRef = useRef(null);

  //This function run on button click 
  function handleInput()
  {
    console.warn(inputRef.current.value);

     inputRef.current.value="Alok";//set value to Alok
     inputRef.current.focus();//focus the input box
     //change the text color
     inputRef.current.style.color="blue";
    //  inputRef.current.style.display="none";     //hide input box
  }

    return(
        <div>
            <h3>useRef in React</h3>
            <input type="text" ref={inputRef}/>
            <button onClick={handleInput}>Handle Input</button>
        </div>
    )
}

export default DOM;