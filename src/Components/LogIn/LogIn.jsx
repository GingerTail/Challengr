import React from 'react';
import './login.css';




class login extends React.Component {
    render() {
        return (

            <div className="form-box">

                <h2 className="text-center m-4" >Log in</h2>
                <div className="social-icons">
                    <i className="fab fa-github" id="social-icons"></i>
                    <i className="fab fa-facebook" id="social-icons"></i>
                    <i className="fab fa-google" id="social-icons"></i>
                    <hr />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input type="email" name="Email" className="input-field" placeholder="Email" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input type="password" name="Password" className="input-field" placeholder="Enter Password" required></input>

                        <span href='/#'>Forgot Password ?</span>
                        <button type="button" className="btn-Register" >Log in</button>
                        <button type="button" className="btn-Register">Register Now</button>
                    </div>
                </div>
            </div>

        );
    }
}


export default login;