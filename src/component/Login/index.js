import React from "react";
import '../Login/login.css';

import Logo from "../../Images/login@logo.png";
const Login = () => {

    const threatrule_detailurl=()=>{
        window.open('http://localhost:3000/ruletypecreatepage','self')
    }
    return (
        <div>
            {/* <div id="login" style={{backgroundColor: '#2d3f61',height: '100vh'}}>
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
                                        <input type="Submit" name="Submit" className="btn btn-md" value="submit" style={{backgroundColor: 'antiquewhite',color:'black'}} />
                                       
                                        <input onClick={threatrule_detailurl} type="Submit" name="Screen" className="btn btn-md ml-2" value="Screen" style={{backgroundColor: 'antiquewhite', color:'black'}} />
                                    </div>
                                    <div id="register-link" className="text-right">
                                        <a  className="text" style={{color: 'antiquewhite'}}>Register here</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div> */}
            <div className="login" style={{ display: 'flex', backgroundColor: '#f2f3f7' }}>
                <div className="container-fluid pl-0 pr-0" >
                    <div className="">
                        <div className="col-md-1 col-lg-11 pl-0 pr-0">
                            {/* <img src={Background} alt="" style={{ height: '99vh', width: '100%' }} /> */}
                            <section className="left_side">

                                <div className="content">
                                   <img src={Logo} alt="" />
                                   <h5 >INTEGRATED RISK MANGEMENT SYSTEM</h5>
                                   
                                    <p>(IRMS)</p> 
                                     
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                
                <div style={{paddingRight: '5rem'}}>
                    <div className="col-md-1 col-lg-1 pl-0 pr-0 ">
                        <section className="right_side">
                            <form className="form_logon">
                                <div className="panel panel-white">
                                    <div className="panel-heading">
                                        <div className="panel-title">LOGIN</div>
                                    </div>
                                    <div className="form-group ">
                                        <label>Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                            placeholder="Enter email" />
                                    </div>
                                    <div className="form-group ">
                                        <label>Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Remember</label>
                                        <br />
                                        <button type="submit" className="btn_login">Login</button>
                                        <br />
                                        <button onClick={threatrule_detailurl} type="submit" className="btn_login">Screen</button>
                                    </div>
                                    {/* <!-- <div class="d-flex justify-content-center links" style="color: #000; text-align: center;">
                                            Don't Have An Account?<a href="SignUp.html" style="color: blue;">Register Now</a>
                                        </div> --> */}
                                </div>
                            </form>

                        </section>
                    </div>
                </div>

                
            </div>

        </div>
    )
}
export default Login