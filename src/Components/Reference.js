import React from 'react';

class MyRef extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            showMe : ""
        }
    }

    third = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault();
       console.log(this.refs.first, this.second, this.third);
     
    }

    update = (e)  => {
        this.setState({
            showMe : this.refs.first.value
        })
    }

    render() {
        return(
            <div>
                <h1> Refs</h1>
                <form onSubmit = {this.handleSubmit}>
                <input type = "number" defaultValue= "first" ref="first"  onChange={this.update} />
                <input type="text" defaultValue= "second" ref={input => (this.second = input)} />
                <input type="text" defaultValue= "third" ref={this.third} />

                <button >submit</button>
                {this.state.showMe}
                </form>
            </div>

        )
    }
}

export default MyRef;