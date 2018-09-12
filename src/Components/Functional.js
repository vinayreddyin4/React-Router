import React from 'react';

const Functional = () => {

    const sayHi = () => {
        alert('hi');
    }

    return(
        <div>
            <h1>hello hi</h1>
            <button onClick={sayHi}>submit</button>  
        </div>
    )
}
export default Functional;