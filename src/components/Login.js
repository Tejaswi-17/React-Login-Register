import React from "react";
import loginImage from "../login.png"
export class Login extends React.Component{   
    render(){
        return(
        <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
            <div className="image">
            <image src={loginImage} alt="Logo"/>
            </div>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="Enter your name!"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password please!"></input>
                </div>
            </div>
            </div>
            <div className="footer">
                <button type="button" className="btn" >Login</button>
            </div>
        </div>
        );
    }
}