import React from 'react';

class ClickTest extends React.Component {
    state = {
        name : 'vinay'
    }

    handleState = (e) => {
        e.preventDefault();
        this.setState({
            name: "Mandhadi"
        })
    }

    render() {
        return(
            <div>
                <p> hello {this.state.name}</p>
                <button onClick= {this.handleState}>click to change</button> 
            </div>
        )
    }

}
export default ClickTest;