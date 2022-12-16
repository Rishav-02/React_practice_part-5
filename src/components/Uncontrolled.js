// Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.

import {useRef} from 'react';

function Uncontrolled() {
    const Refcom = useRef(null);
    const Refcom2 = useRef(null);

  function submitForm(e) {
    e.preventDefault();//prevent page refresh
    console.warn("company name : ",Refcom.current.value);
    console.warn("months name : ",Refcom2.current.value);

    // Using DOM manipulation
    let input3 = document.getElementById('input3').value;
    console.warn("Year : ",input3);
  }
  return (
    <div>
    {/* use of Ref */}
      <h3>Uncontrolled Component</h3>
      {/* creating an onSubmit function that triggers when we submit the form  */}
      <form onSubmit={submitForm}>
      <label>Company: </label>
        <input type="text" required ref={Refcom} /> <br />
        <label>Months: </label>
        <input type="text" required ref={Refcom2} /> <br />
        {/* using DOM */}
        <label>Year: </label>
        <input id='input3' required type="text"/> <br/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Uncontrolled;