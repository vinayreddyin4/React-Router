import React from 'react';

class MyRef extends React.Component {

    third = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault();
       console.log(this.second);
    }

    render() {
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                <input type="text" defaultValue= "second" ref={input => (this.second = input)} />
                <button >submit</button>
                </form>
            </div>

        )
    }
}

export default MyRef;