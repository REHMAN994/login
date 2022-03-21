import React from "react";
import { useState } from "react";
import "../side-bar/sidebar.css";

const Sidebar = () =>{
  const [isActiveMain, setIsActiveMain] = useState (false);
  const [isActive, setIsActive] = useState (false);
  const [isActive2, setIsActive2] = useState (false);
  const [isActive3, setIsActive3] = useState (false);
  const [isActive4, setIsActive4] = useState (false);
  const [isActive5, setIsActive5] = useState (false);
  const [isActive6, setIsActive6] = useState (false);
  const [isActive7, setIsActive7] = useState (false);
  const [isActive8, setIsActive8] = useState (false);
  const [isActive9, setIsActive9] = useState (false);
  const [isActive10, setIsActive10] = useState (false);
  const [isActive11, setIsActive11] = useState (false);
  const [isActive12, setIsActive12] = useState (false);

  return (
    <div className="contaner">
      <div style={{ width: '14rem' }}>
        <div className="col-md-2 col-lg-2  pl-0 pr-0">
          <section id="side-bar">
            <nav className="nav  navbar-toggleable-sm navBg">
              <div className=" flex-column mt-md-0  pt-md-0  p-0 w-100 container-fluid" id="navbarWEX">

                <div className="dropdown">
                  <button onClick={(e) => setIsActiveMain(!isActiveMain)} className="dropbtn" >Maintenance Table <i className="fa fa-caret-down ml-2"></i></button>
                  {isActiveMain && (
                    <div id="myDropdown" className="dropdown-content">
                      <div className="dropdown">
                        <button onClick={(e) => setIsActive(!isActive)} className="dropbtn" >Rule Type Ref <i className="fa fa-caret-down ml-2"></i></button>
                        {isActive && (
                          <div id="myDropdown" className="dropdown-content">
                            <a href="http://localhost:3000/ruletypecreatepage">Create Rule</a>
                            <a href="http://localhost:3000/ruletypedetailspage">Details Rule</a>
                            <a href="http://localhost:3000/ruletypedeletepage">Delete Details</a>
                          </div>
                        )}

                      </div>

                      <div className="dropdown">
                        <button onClick={(e) => setIsActive2(!isActive2)} className="dropbtn">Threat Rule Ref <i className="fa fa-caret-down ml-2"></i></button>
                        {isActive2 && (
                          <div className="dropdown-content">
                            <a href="http://localhost:3000/threatrulecreatepage">Create Threat Rule</a>
                            <a href="http://localhost:3000/threatruleupdatedetails">Details Threat Rule</a>
                            <a href="http://localhost:3000/threatruledeletepage">Delete Threat Details</a>
                          </div>
                        )}
                      </div>

                      <div className="dropdown">
                        <button onClick={(e) => setIsActive3(!isActive3)} className="dropbtn">Condition Ref <i className="fa fa-caret-down ml-2"></i></button>
                        {isActive3 && (
                          <div class="dropdown-content">
                            <a href="http://localhost:3000/createconditionpage">Create Condition </a>
                            <a href="http://localhost:3000/conditiondetailspage">Details Condition </a>
                            <a href="http://localhost:3000/deleteconditionpage">Delete Condition</a>
                          </div>
                        )}
                      </div>

                      <div className="dropdown">
                        <button onClick={(e) => setIsActive4(!isActive4)} className="dropbtn">Case Type Ref  <i className="fa fa-caret-down ml-2"></i></button>
                        {isActive4 && (
                          <div className="dropdown-content">
                            <a href="http://localhost:3000/createcasetypage">Create Case-Type </a>
                            <a href="http://localhost:3000/casetypedetailspage">Details Case-Type </a>
                            <a href="http://localhost:3000/casetypedeletepage">Delete Case-Type</a>
                          </div>
                        )}
                      </div>

                      <div className="dropdown">
                        <button onClick={(e) => setIsActive5(!isActive5)} className="dropbtn">Status Ref  <i className="fa fa-caret-down ml-2"></i></button>
                        {isActive5 && (
                          <div className="dropdown-content">
                            <a href="http://localhost:3000/statuscreatepage">Create Status </a>
                            <a href="http://localhost:3000/statusdetailspage">Details Status </a>
                            <a href="http://localhost:3000/statusdeletepage">Delete Status</a>
                          </div>
                        )}
                      </div>

                      <div className="dropdown">
                        <button onClick={(e) => setIsActive6(!isActive6)} className="dropbtn">Create Doc Type <i className="fa fa-caret-down ml-2"></i></button>
                        {isActive6 && (
                          <div className="dropdown-content">
                            <a href="http://localhost:3000/createdocument">Create Doc Type</a>
                            <a href="http://localhost:3000/createdocfieldpage">Create Doc Field </a>
                          </div>
                        )}
                      </div>

                      <div className="dropdown">
                        <button onClick={(e) => setIsActive7(!isActive7)} className="dropbtn"> Maintain Doc   <i className="fa fa-caret-down ml-2"></i></button>
                        {isActive7 && (
                          <div className="dropdown-content">
                            <a href="http://localhost:3000/docupdatetypepage">Update Doc Type </a>
                            <a href="http://localhost:3000/docmaintainfieldpage">Maintain Doc Field </a>
                            <a href="http://localhost:3000/docaddnewfieldpage">Add New Doc Field</a>
                            <a href="http://localhost:3000/docupdatefieldpage">Update Doc Field</a>
                          </div>
                        )}
                      </div>

                      <div className="dropdown">
                        <button onClick={(e) => setIsActive8(!isActive8)} className="dropbtn"> Relationships Doc  <i className="fa fa-caret-down ml-2"></i></button>
                        {isActive8 && (
                          <div className="dropdown-content">
                            <a href="http://localhost:3000/primarydoctypepage">Primary Doc Type </a>
                            <a href="http://localhost:3000/relationshipcreatedocpage"> Create Doc Relationships </a>
                          </div>
                        )}
                      </div>

                      <div className="dropdown">
                        <button onClick={(e) => setIsActive9(!isActive9)} className="dropbtn"> Relationships Update   <i className="fa fa-caret-down ml-2"></i></button>
                        {isActive9 && (
                          <div className="dropdown-content">
                            <a href="http://localhost:3000/primaryupdatedoctypepage">Primary Doc Type </a>
                            <a href="http://localhost:3000/relationshipupdatedocpage"> Update Doc Relationships </a>
                          </div>
                        )}
                      </div>

                      <div className="dropdown">
                        <button onClick={(e) => setIsActive10(!isActive10)} className="dropbtn"> Agency Ref  <i className="fa fa-caret-down ml-2"></i></button>
                        {/* <button onClick={()=> window.open('http://localhost:3000/agencydelaispage', "_self")} className="dropbtn"> Agency Ref  <i className="fa fa-caret-down ml-2"></i></button> */}
                        {isActive10 && (
                          <div className="dropdown-content">
                            <a href="http://localhost:3000/agencycreatepage">Create Agency </a>
                            <a href="http://localhost:3000/agencydelaispage"> Details Agency </a>
                            <a href="http://localhost:3000/agencydeletepage"> Delete Details</a>
                          </div>
                        )}
                      </div>

                    </div>
                  )}

                </div>

                <div className="dropdown">
                  <button onClick={(e) => setIsActive11(!isActive11)} className="dropbtn"> Delete Risk Rule  <i className="fa fa-caret-down ml-2"></i></button>
                  {/* <button onClick={()=> window.open('http://localhost:3000/agencydelaispage', "_self")} className="dropbtn"> Agency Ref  <i className="fa fa-caret-down ml-2"></i></button> */}
                  {isActive11 && (
                    <div className="dropdown-content">
                      <a href="http://localhost:3000/riskruledeletelivepage">Delete Live </a>
                      <a href="http://localhost:3000/riskruledeleteundeployedpage"> Delete Undeployed </a>
                      
                    </div>
                  )}
                </div>

                <div className="dropdown">
                  <button onClick={(e) => setIsActive12(!isActive12)} className="dropbtn"> DEPLOY RISK RULE  <i className="fa fa-caret-down ml-2"></i></button>
                  {isActive12 && (
                    <div className="dropdown-content">
                      <a href="http://localhost:3000/deployriskrulepage">Deploy Risk Rule </a>
                      <a href="http://localhost:3000/alreadydeployeriskrulepage">Already Deployed Rule</a>
                      
                    </div>
                  )}
                </div>

                {/* <a className="nav-link"><i className="fa fa-plus" aria-hidden="true"></i><span>Creating Channels</span></a>
                <a className="nav-link"><i className="fa fa-plus" aria-hidden="true"></i><span>Creating List </span></a>
                <a className="nav-link"><i className="fa fa-wrench" aria-hidden="true"></i><span>Tools</span></a> */}

              </div>
            </nav>
          </section>
        </div>

      </div>

    </div>
  )
}
export default Sidebar