import React from "react";
import "../side-bar/sidebar.css";

const Sidebar = () =>{
    return(
        <div className="contaner-fluid">
            <div style={{width: '14rem'}}>
                <div className="col-md-1 col-lg-1  pl-0 pr-0">
                    <section id="side-bar">
                        <nav className="nav  navbar-toggleable-sm navBg">
                            <div className=" flex-column mt-md-0  pt-md-0  p-0  container-fluid" id="navbarWEX">

                            <div className="dropdown">
                              <button className="dropbtn">Threat Rule <i className="fa fa-caret-down ml-2"></i></button>
                              <div className="dropdown-content">
                                <a href="#">Create Rule</a>
                                <a href="#">Select Rule</a>
                                <a href="#">Delete Details</a>
                              </div>
                            </div>

                            <div className="dropdown">
                              <button className="dropbtn">Rule Type Ref <i className="fa fa-caret-down ml-2"></i></button>
                              <div className="dropdown-content">
                                <a href="#">Create Rule</a>
                                <a href="#">Select Rule</a>
                                <a href="#">Delete Details</a>
                              </div>
                            </div>
                            <div className="dropdown">
                              <button className="dropbtn">Condition Ref <i className="fa fa-caret-down ml-2"></i></button>
                              <div class="dropdown-content">
                                <a href="#">Create Condition </a>
                                <a href="#">Select Condition </a>
                                <a href="#">Delete Condition</a>
                              </div>
                            </div>
    
                               
                                <a href="" className="nav-link"><i className="fa fa-plus" aria-hidden="true"></i><span>Creating Channels</span></a>
                                <a href="" className="nav-link"><i className="fa fa-plus" aria-hidden="true"></i><span>Creating List </span></a>
                                <a href="" className="nav-link"><i className="fa fa-wrench" aria-hidden="true"></i><span>Tools</span></a>

                            </div>
                        </nav>
                    </section>
                </div>

            </div>

        </div>
    )
}
export default Sidebar