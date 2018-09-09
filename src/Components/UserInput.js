import React from 'react';

class UserInput extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            first : '',
            last : '',
            list:[]
        }
    }

    submitData = (event) => {
        const {first, last } = this.state;
        event.preventDefault();
        this.setState({
            first : '',
            last : '',
            list: [{
                first, last
            },
        ...this.state.list]
        })

    
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id] :event.target.value
        })

    }

    render() {
        return(
            <div>
                <form>
                    <input id= "first" type="text" onChange={this.handleChange}  value={this.state.first}/>
                    <input id= "last" type="text" onChange={this.handleChange} value={this.state.last} />
                    <button onClick={this.submitData}> Submit </button>
                </form>
                <div>
                    {
                      this.state.list.map((item, idx) => 
                        <div key={idx}> 
                        <span>{item.first}</span>
                        <span>{item.last}</span>
                        </div>
                      )  
                    }
                </div>
            </div>
        )
    }
}
export default UserInput;
