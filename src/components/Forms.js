import { useState } from 'react';
  
function Forms() {
  const [name, setName] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();//prevent a page refresh on form submit
    alert(`Name: ${name}`);
  }
    
  return (
    <div className="App">
      <h3>Forms, Controlled Component</h3>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Forms;