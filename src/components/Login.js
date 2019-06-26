import React from 'react';

export default class extends React.Component {
    state = {
        name: 'Devin',
        pass: '*****',
    }
    render() {
        console.log(this.state.name)

        return (
            <>
                <h1>Login Page</h1>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    alert(this.state.name)
                }}>
                    <p>User Name: </p>
                    <input name="username" type="text" placeholder="Name Please..." onChange={(event) => this.setState({ name: event.target.value })} required 
                    value={this.state.name}/>
                    
                <br />

                    <p>Password: </p>
                    <input name="password" type="password" placeholder="Password" onChange={(event) => this.setState({ pass: event.target.value })} required />
                    <br />
                    <input type="submit" value="Submit" />
                </form>

                

                {/* <p>{this.state.name}</p>
                <p>{this.state.pass}</p> */}

            </>
        )
    }
}