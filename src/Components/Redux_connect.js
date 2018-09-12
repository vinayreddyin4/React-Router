import React from 'react';
import { connect } from 'react-redux';

class State extends React.Component {

    render() {
        return (
            <div>
                <p>
                    hello
                </p>
            </div>
        )
    }
}


const mapStateToProps = state => { /* state is your redux store object */
    return {
        user : state.activeUser
}
}
export default connect(mapStateToProps)(State);