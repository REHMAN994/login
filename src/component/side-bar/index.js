import React from "react";
import "../side-bar/sidebar.css";

const Sidebar = () =>{
  return (
    <div className="contaner-fluid">
      <div style={{ width: '14rem' }}>
        <div className="col-md-2 col-lg-2  pl-0 pr-0">
          <section id="side-bar">
            <nav className="nav  navbar-toggleable-sm navBg">
              <div className=" flex-column mt-md-0  pt-md-0  p-0 w-100 container-fluid" id="navbarWEX">

                <div className="dropdown">
                  <button onClick={() => window.open('http://localhost:3000/ruletypedetailspage',"_self")} className="dropbtn" >Rule Type Ref <i className="fa fa-caret-down ml-2"></i></button>
                  <div className="dropdown-content">
                    <a href="http://localhost:3000/ruletypecreatepage">Create Rule</a>
                    <a href="http://localhost:3000/ruletypeselectpage">Select Rule</a>
                    <a href="http://localhost:3000/ruletypedeletepage">Delete Details</a>
                  </div>
                </div>

                <div className="dropdown">
                  <button onClick={() => window.open('http://localhost:3000/threatruleupdatedetails',"_self")} className="dropbtn">Threat Rule Ref <i className="fa fa-caret-down ml-2"></i></button>
                  <div className="dropdown-content">
                    <a href="http://localhost:3000/threatrulecreatepage">Create Rule</a>
                    <a href="http://localhost:3000/threatruleselectpage">Select Rule</a>
                    <a href="http://localhost:3000/threatruledeletepage">Delete Details</a>
                  </div>
                </div>

                <div className="dropdown">
                  <button onClick={() => window.open('http://localhost:3000/conditiondetailspage',"_self")} className="dropbtn">Condition Ref <i className="fa fa-caret-down ml-2"></i></button>
                  <div class="dropdown-content">
                    <a href="http://localhost:3000/createconditionpage">Create Condition </a>
                    <a href="http://localhost:3000/selectconditionpage">Select Condition </a>
                    <a href="http://localhost:3000/deleteconditionpage">Delete Condition</a>
                  </div>
                </div>

                <div className="dropdown">
                  <button onClick={()=> window.open('http://localhost:3000/casetypedetailspage', "_self")} className="dropbtn">Case Type Ref  <i className="fa fa-caret-down ml-2"></i></button>
                  <div className="dropdown-content">
                    <a href="http://localhost:3000/createcasetypage">Create Case-Type </a>
                    <a href="http://localhost:3000/casetypeselectpage">Select Case-Type </a>
                    <a href="http://localhost:3000/casetypedeletepage">Delete Case-Type</a>
                  </div>
                </div>

                <div className="dropdown">
                  <button onClick={()=> window.open('http://localhost:3000/statusdetailpage'), "_self"} className="dropbtn">Status Ref  <i className="fa fa-caret-down ml-2"></i></button>
                  <div className="dropdown-content">
                    <a href="http://localhost:3000/statuscreatepage">Create Status </a>
                    <a href="http://localhost:3000/statusselectpage">Select Status </a>
                    <a href="http://localhost:3000/statusdeletepage">Delete Status</a>
                  </div>
                </div>


                <a className="nav-link"><i className="fa fa-plus" aria-hidden="true"></i><span>Creating Channels</span></a>
                <a className="nav-link"><i className="fa fa-plus" aria-hidden="true"></i><span>Creating List </span></a>
                <a className="nav-link"><i className="fa fa-wrench" aria-hidden="true"></i><span>Tools</span></a>

              </div>
            </nav>
          </section>
        </div>

      </div>

    </div>
  )
}
export default Sidebar