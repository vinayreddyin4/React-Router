import React from 'react';


// 1. create context
const MyContext = React.createContext();
// 2. create provider component
class MyProvider extends React.Component {
    state = {
        name : 'Mandhadi',
        age  : 26
    }

    render() {
        return(
            <div>
                <MyContext.Provider value={{
                    state: this.state,
                    growAge : () => {
                        this.setState({
                            age: this.state.age+1
                        })
                    }
                }}>
                {this.props.children}
                </MyContext.Provider>
            </div>
        )
    }
}


class Person extends React.Component {   
    render() {
        return(
            <div>
                <h2>Person</h2>
                <p>how to access here</p>
                <MyContext.Consumer>
                    {
                        (context) => {
                            return(
                                <React.Fragment>
                                <p>My name is {context.state.name}</p>
                                <p>My Age is  {context.state.age}</p>
                                <button onClick = {context.growAge}> Get Older</button>
                                </React.Fragment>
                            )
                        }
                    }
                </MyContext.Consumer>
            </div>
        )
    }
}
class Family extends React.Component {
    render() {
        return(
            <div>
                <h2>Family</h2>
                <p>my name is {this.props.name}</p>
                <Person  name={this.props.name}/>

            </div>
        )
    }
}
class App1 extends React.Component {
    state = {
        name : 'Mandhadi',
        age  : 26
    }
    render() {
        return(
            <MyProvider>
            <div>
                <h2>State is here</h2>
                <Family name={this.state.name}/>
            </div>
            </MyProvider>
        )
    }
}
export default App1;
