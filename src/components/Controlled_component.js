import {useState} from "react";

function Controlled(){
    // default value are Goa and Rice
let [place,setPlace]=useState("Goa");
let [item,setItem]=useState("Rice");

    return(
        <div>
        {/* use of state */}
            <h3>Controlled Component</h3>
            <input type="text" value={place} onChange={(e)=>setPlace(e.target.value)} />
            <input type="text" value={item} onChange={(e)=>setItem(e.target.value)} />
            {/* To show print data */}
            <h4>Place Name: {place}</h4>
            <h4>Item Name: {item}</h4>
        </div>
    )
}

export default Controlled;