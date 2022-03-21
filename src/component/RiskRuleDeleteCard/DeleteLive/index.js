import React from "react";

const RiskRuleDeleteLive = () => {
    return(
        <div>
            <div className="row">
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">
                            <h1>DELETE LIVE RISK RULE </h1>
                            <div>
                                <form className="ml-auto" method="post">
                                    <label>Rule ID</label>
                                    <input className="ml-2" type="text" style={{width: '80px'}} />
                                    <label className="ml-4">Document Type</label>
                                    <input className="ml-2" type="text" style={{width: '160px'}} />

                                    <label className="ml-4">Threat Group</label>
                                    <input className="ml-2" type="text" style={{width: '100px'}} />
                                    <br />

                                    <label style={{marginTop:'10px'}}>Run Number</label>
                                    <input className="ml-2" type="text" style={{width: '50px'}}/>
                                    <label className="ml-3">Rule Type</label>
                                    <input className="ml-2" type="text" style={{width: '50px'}} />
                                    <label className="ml-3">Rule Method</label>
                                    <input className="ml-2" type="text" style={{width: '50px'}}/>
                                    <label className="ml-3">Case Type</label>
                                    <input className="ml-2" type="text" style={{width: '50px'}}/>
                                    <br />

                                    <label className=" ml-5" style={{marginTop: '10px'}}>Description</label>
                                    <input className="ml-2" type="text" style={{width: '440px'}} />
                                    <br />

                                    <label style={{marginTop:'10px'}}>Weighting%</label>
                                    <input className="ml-2" type="text" style={{width: '50px'}} />
                                    <label className="ml-5">Number Conditions</label>
                                    <input className="ml-2" type="text" style={{width: '50px'}}/>
                                    <label className="ml-5">Status</label>
                                    <input className="ml-2" type="text" style={{width: '50px'}} />

                                    <hr style={{border: '1px solid #2d3f61'}} />

                                    <label>Reason For Deletion</label>
                                    <input className="ml-2" type="text" style={{width: '30rem', height: '40px'}} />
                                    <br />
                                    <label style={{marginTop: '10px'}}>Confirm Deletion </label>
                                    <input className="ml-2" type="text" style={{width: '50px'}} />
                                </form>
                            </div>
                            <br />
                            <div style={{display:'flex', flexWrap: 'wrap'}}>
                                <input type="Submit" name="Submit" className="btn btn-md" value="CANCEL" style={{backgroundColor: '#d90f23', color: '#fff', width:'142px '}}/>
                                <input type="Submit" name="Submit" className="btn btn-md " value="REVIEW RULE" style={{backgroundColor: '#2d3f61', color: '#fff', float:'right' , width:'142px', marginLeft:'10rem'}} />
                                <input type="Submit" name="Submit" className="btn btn-md ml-2" value="REVIEW RULE REVISION" style={{ backgroundColor: '#2d3f61',  float: 'right', color: '#fff',width: '204px' }} />
                            </div>

                        </div>

                    </section>
                </div>
            </div>
        </div>            
    )
}
export default RiskRuleDeleteLive