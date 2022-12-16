import React, { useState } from "react";

function HigherOrderComponent(){
    return(
        <div>
            <h3>Higher-Order Component</h3>
            {/* Input as a parameter and output as a parameter with extra features */}
            <HOCRed comp={Counter}/>
            <HOCYellow comp={Counter}/>
            <HOCBlue comp={Counter}/>
        </div>
    )
}

function HOCRed(props)
{
    return <h4 style={{backgroundColor:"red",width:500,margin:60,padding:10}}>Red<props.comp/></h4>
}

function HOCYellow(props)
{
    return <h4 style={{backgroundColor:"yellow",width:500,margin:60,padding:10}}>Yellow<props.comp/></h4>
}

function HOCBlue(props)
{
    return <h4 style={{backgroundColor:"blue",width:500,margin:60,padding:10}}>Blue<props.comp/></h4>
}

//In this Counter we have to always change the style so this is not possible for so many data, To solve this problem we will use functions(like a wrapper) for those style that we need to change and also pass from props to Component. 
function Counter()
{
    const [count,setCount] = useState(0);
    return( 
    <div>
        <h4>{count}</h4>
        <button onClick={()=>setCount(count+1)}>Update</button>
    </div>
    )
}


export default HigherOrderComponent;