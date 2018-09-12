import React from 'react';


class Validation extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user : '',
            userError : '',
            email : '',
            emailError: ''
      
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

validate = () => {
    let isError = false;
    const errors = {
        userError : '',
        emailError : ''
    };
    
    if(this.state.user.length < 5) {
        isError = true;
        errors.userError = "username needs to be atleast 5 characters"
    } 
    if(this.state.email.indexOf("@") === -1) {
        isError = true;
        errors.emailError = "Required valid email";
    } 

    this.setState({
        ...this.state,
        ...errors
    });
    return isError;
};

onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if(!err){
        this.setState({
            user : '',
            email: ''
        });
    }
}
   

    render() {
        return(
            <div>
                <form >
                    <input type="text" name="user" value={this.state.user} onChange={this.handleChange} errorText={this.state.userError} /><br /> <br />
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange}  errorText={this.state.emailError}/> <br /><br />
                    <input type="submit" onClick= {this.onSubmit} />
                </form>
            </div>
        )
    }
}

export default Validation;