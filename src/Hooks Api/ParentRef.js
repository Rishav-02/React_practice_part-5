import React, { useRef } from "react";
import Forward from "./forwardRef";

function ParentRef() {
  const inputRef = useRef(null);

  function updateInput() {
    inputRef.current.value = "forwardRef";
    inputRef.current.style.color = "orange";
    inputRef.current.focus();
  }
  return (
    <>
      <h3>forwardRef in React</h3>
      {/* send value from parent */}
      <Forward ref={inputRef} />
      {/* click the button then value forwardRef is set to inputbox */}
      <button onClick={updateInput}>Update InputBox</button>
    </>
  );
}

export default ParentRef;
