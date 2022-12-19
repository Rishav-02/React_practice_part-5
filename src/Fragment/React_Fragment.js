//Here if we not import Fragment then we have to use "React.Fragment" in place of Fragment.
import React,{Fragment} from 'react';
import Column from './Child';

function Component(){
    // <> and </> are also syntax of Fragment.
    //Fragment remove multiple(extra) elements and components
    return(
        <Fragment>
            <h3>Fragment in React</h3>
            <table>
                <tbody>
                    <tr>
                       <Column/>
                    </tr>
                </tbody>
            </table>            
        </Fragment>
    )
}

export default Component;