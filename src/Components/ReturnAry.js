import React from 'react';

class ReturnAry extends React.Component {

    render() {
        return [
            <h1 key="1">Returning Array in React 16 </h1>,
            <p key ="2">Hello Recat</p>,
            <h4 key="3"> New Feature</h4>
        ]
    }
}

export default ReturnAry;