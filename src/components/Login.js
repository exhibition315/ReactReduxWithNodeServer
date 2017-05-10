import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onLoginClick = this.onLoginClick.bind(this);
    }

    onLoginClick() {
        this.props.actions.getAuthAction();
    }

    render() {
        return (
            <div className="container">
                <h2 className="form-signin-heading">Please sign in</h2>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="text" className="form-control" placeholder="Email address" required autoFocus />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" className="form-control" placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" onClick={this.onLoginClick}>Sign in</button>
            </div>
        );
    }
}