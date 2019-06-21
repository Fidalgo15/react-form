import React from 'react';

export default class extends React.Component {
    render() {
        return(
            <>
                <h1>Login Page</h1>
                <form>
                    <p>User Name: </p>
                    <input type="text" placeholder="Name Please..." Required/>
                </form>

            </>
        )
    }
}