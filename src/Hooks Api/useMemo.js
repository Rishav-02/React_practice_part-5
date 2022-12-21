// The useMemo is a hook used in the functional component of react that returns a memoized value. In Computer Science, memoization is a concept used in general when we don’t need to recompute the function with a given argument for the next time as it returns the cached result. A memoized function remembers the results of output for a given set of inputs. For example, if there is a function to add two numbers, and we give the parameter as 1 and 2 for the first time the function will add these two numbers and return 3, but if the same inputs come again then we will return the cached value i.e 3 and not compute with the add function again. In react also, we use this concept, whenever in the React component, the state and props do not change the component and the component does not re-render, it shows the same output. The useMemo hook is used to improve performance in our React application.


// On every subsequent render, React will compare the dependencies i.e [count] with the dependencies you passed during the last render. If none of the dependencies have changed (compared with Object.is), useMemo will return the value you already calculated before. Otherwise, React will re-run your calculation and return the new value.

import React, { useState, useMemo } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  //If multiCount() function will be used outside of useMemo() then the this function calls on every setItem button click.

/* Syntax :
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);        Returns a memoized value. */

  //Here, useMemo() is used to restrict the calling of unnecessary function that cause performance degrade of Application.
  const multiCountMemo = useMemo(
    function multiCount() {
      console.warn("multiCount called");
      return count * 2;
    },[count] //only changes when count changes
  );

  return (
    <div>
      <h3>useMemo Hook in React</h3>
      <h4>Count: {count}</h4>
      <h4>Item: {item}</h4>
      <h4>{multiCountMemo}</h4>

      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item * 10)}>Update Item</button>
    </div>
  );
}

export default Memo;
