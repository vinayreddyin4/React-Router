import React from 'react';

class UserForm extends React.Component {

   

    render(){
        return(
            <div>
                <form onSubmit={this.props.UserSubmit}>
                    <input type="text" name="username" />
                    <button> Submit</button>
                </form>
            </div>
        )
    }
}

export default UserForm;