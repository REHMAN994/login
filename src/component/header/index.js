import React from "react";
import "./header.css";

const Header = () =>{
    return(
        <div id="main">
            <nav className="navbar navbar-expand-lg navbar-dark scrolling-navbar navbar-fixed">
                <div className="container-fluid">

                    <a className="navbar-brand" href="#" target="">
                        <strong>IRMS</strong>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav ml-auto">
                            <i className="fas fa-search" style={{color: '#fff' , margin: '12px'}}></i>

                            <i className="fas fa-chart-line" style={{color: '#fff' , margin: '12px'}}></i>
                            <i className="fas fa-bell" style={{color: '#fff' , margin: '12px'}}></i>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Admin
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <i className="fas fa-user" style={{color: '#fff' , margin: '12px'}}></i>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header