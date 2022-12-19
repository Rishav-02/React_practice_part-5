//Child Component
function Child(props) {
  const data2={name:"Rishav Raj",email:"rishavsinha380@gmail.com",course:"BCA",class:"Semester IV"} //to send any types of data to parent

  return (
    <div>
    {/* Through name={data1} data send from parent App.js and received here in a child User.js */}
      <h4>User Name : {props.name}</h4>
      {/* onClick event here used to send data to parent App.js */}
      <button onClick={()=>props.alert(data2)}>Click Me</button>
    </div>
  );
}

export default Child;