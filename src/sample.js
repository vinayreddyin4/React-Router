import React, { Component } from 'react';

class App1 extends Component {
constructor(props) {
super(props);
this.state = {
firstName: '',
lastName: '',
id: '',
list: []
};
}

handleChange = (event) => {
this.setState({ [event.target.id]: event.target.value })
}

saveData = (event) => {
const { firstName, lastName, id } = this.state;
event.preventDefault();
this.setState({
firstName: '',
lastName: '',
id: '',
list: [
{ firstName, lastName, id },
...this.state.list
]
})
}

render() {
return (
<div>
<h1> Customer Details</h1>
<form className="formClass" >
<div>
ID:
<input id="id" type="search" placeholder="ID" value={this.state.id} onChange={this.handleChange} />
</div>
<div>
FirstName:
<input id="firstName" type="text" placeholder="First Name" onChange={this.handleChange} value={this.state.firstName} />
</div>
<div>
LastName:
<input id="lastName" type="text" placeholder="Last Name" onChange={this.handleChange} value={this.state.lastName} />
</div>
<div>
<button onClick={this.saveData}> Add </button>
</div>
</form>
<div style={{display: 'flex', justifyContent: 'space-around' }}>
{this.state.list.map((item, idx) =>
<div key={idx}>
<span>{item.id}</span>
<span>{item.firstName}</span>
<span>{item.lastName}</span>
</div>)}
</div>
</div>
);
}
}
export default App1;