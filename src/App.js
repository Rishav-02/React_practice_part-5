import './App.css';

import Component from './Fragment/React_Fragment';
import Child from './Lifting State UP/User';
import State from './Pure Component/PureComponent_with_state';
import Parent from './Pure Component/ParentProps';
import Memo from './Hooks Api/useMemo';
import Ref from './Hooks Api/Ref';
import DOM from './Hooks Api/useRef';
import ParentRef from './Hooks Api/ParentRef';
import Controlled from './components/Controlled_component';
import Forms from './components/Forms';
import Uncontrolled from './components/Uncontrolled';
import HigherOrderComponent from './components/Higher_Order_Component';

function App() {
  let data1="Rishav Raj" //to send data to child

  //For send data from User.js to App.js  i.e from child to parent
  function parentAlert(def){
    alert(def.name);
    console.log(def);
  }
  return (
    <div className="App">
      <Component/>
      <h2>Lifting State UP</h2>
      {/* Here, name={data} is used to send data from parent to child and for alert={parentAlert} is used to receive data from child to parent. */}
      <Child name={data1} alert={parentAlert}/>
      <br/>
      <State/>
      <Parent/> <br/>
      <Memo/>
      <Ref/>
      <DOM/>
      <ParentRef/>
      <Controlled/>
      <Forms/>
      <Uncontrolled/>
      <HigherOrderComponent/>
    </div>
  );
}

export default App;
