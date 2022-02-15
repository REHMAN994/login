import React from "react";
import '../Login/login.css';

const Login = () => {
    return (
        <div>
            <div id="login" style={{backgroundColor: '#2d3f61',height: '100vh'}}>
                <div className="text-center pt-5">
                    <h1 className="text">IRMS</h1>
                </div>
                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div id="login-box" className="col-md-12">
                                <form id="login-form" className="form" action="" method="post">
                                    <h3 className="text-center text">Login</h3>
                                    <div className="form-group" >
                                        <label for="username" className="text">Username:</label><br />
                                        <input type="text" name="username" id="username" className="form-control" />
                                    </div>
                                    <div className="form-group" >
                                        <label for="password" className="text">Password:</label><br />
                                        <input type="text" name="password" id="password" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="remember-me" className="text"><span>Remember me<input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
                                        <input type="Submit" name="Submit" className="btn btn-md" value="submit" style={{backgroundColor: 'antiquewhite'}} />
                                    </div>
                                    <div id="register-link" className="text-right">
                                        <a href="#" className="text" style={{color: 'antiquewhite'}}>Register here</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Login