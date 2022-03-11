import React from "react";
import "./cardone.css";

const CreatDoc = () =>{
    return (
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">
                            <h1>CREATE DOCUMENT TYPE </h1>
                            <div>
                                <form className="ml-auto" method="post">
                                    <label >Document Type</label>
                                    <input className="ml-2"type="text" style={{width: '150px'}} />
                                    
                                    <label className="ml-4">Process Type</label>
                                    <input className="ml-2" type="text" style={{width: '70px'}} />

                                    <br />
                                    <label style={{marginTop: '30px'}}>Agency Code</label>
                                    <input className="ml-2" type="text" style={{width: '50px'}}/>

                                    <label className="ml-2">Transport Mode</label>
                                    <input className="ml-2" type="text" style={{width: '50px'}}/>

                                    <label className="ml-2" >Movement Type</label>
                                    <input className="ml-2"type="text" style={{width: '50px'}}/>
                                    <br/>
                                    <label className="ml-2"style={{marginTop: '30px'}}>Description</label>
                                    <input className="ml-2" type="text" style={{width: '390px'}}/>
                                </form>
                            </div>
                        </div>
                        <input type="Submit" name="Submit" className="btn btn-md" value="Cancel" style={{ backgroundColor: '#d90f23', color: '#fff', float: 'left' }} />
                        <input type="Submit" name="Submit" className="btn btn-md" value="Save" style={{ backgroundColor: '#2d3f61', color: '#fff', float: 'right' }} />
                    </section>
                </div>
            </div >
        </div >
    )
}
export default CreatDoc
