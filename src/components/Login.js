import React from 'react';

export default class extends React.Component {
    state = {
        name: 'Devin'
    }
    render() {
        console.log(this.state.name)
        return(
            <>
                <h1>Login Page</h1>
                <form>
                    <p>User Name: </p>
                    <input type="text" placeholder="Name Please..." onChange={(event) => this.setState({name: event.target.value})} required/>
                </form>

            </>
        )
    }
}