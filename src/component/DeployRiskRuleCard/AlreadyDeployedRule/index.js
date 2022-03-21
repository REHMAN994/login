import React from "react";

const AlreadyDeployRiskRule = () => {
    return(
        <div>
            <div className="row">
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">
                            <h1>RISK RULE ALREADY DEPLOYED OR DELETED</h1>
                            <div>
                                <form className="ml-auto" method="post">
                                    <label>Rule ID</label>
                                    <input className="ml-2" type="text" style={{ width: '80px' }} />
                                    <label className="ml-4">Document Type</label>
                                    <input className="ml-2" type="text" style={{ width: '160px' }} />
                                    <label className="ml-4">Threat Group</label>
                                    <input className="ml-2" type="text" style={{ width: '100px' }} />
                                    <br />

                                    <label style={{ marginTop: '10px' }}>Run Type</label>
                                    <input className="ml-2" type="text" style={{ width: '50px' }} />
                                    <label className="ml-5">Rule Method</label>
                                    <input className="ml-2" type="text" style={{ width: '50px' }} />
                                    <label className="ml-5">Case Type</label>
                                    <input className="ml-2" type="text" style={{ width: '50px' }} />
                                    <br />
                                    <label style={{ marginTop: '10px' }}>Document Seq</label>
                                    <input className="ml-2" type="text" style={{ width: '50px;' }} />
                                    <label className="ml-3">Rule Name</label>
                                    <input className="ml-2" type="text" style={{ width: '100px' }} />
                                    <br />

                                    <label className=" ml-5" style={{ marginTop: '10px' }}>Description</label>
                                    <input className="ml-2" type="text" style={{ width: '35rem' }} />
                                    <br />

                                    <label style={{ marginTop: '10px' }}>Weighting%</label>
                                    <input className="ml-2" type="text" style={{ width: '50px' }} />
                                    <label className="ml-5">Number Conditions</label>
                                    <input className="ml-2" type="text" style={{ width: '50px' }} />
                                    <label className="ml-5">Status</label>
                                    <input className="ml-2" type="text" style={{ width: '50px' }} />

                                    <hr style={{ border: '1px solid #2d3f61' }} />

                                    <label>Change Description</label>
                                    <input className="ml-2" type="text" style={{ width: '36rem', height: '40px' }} />
                                    <br />
                                    <label className="ml-5" style={{ marginTop: '10px' }}>Last Rule Rev No </label>
                                    <input className="ml-2" type="text" style={{ width: '50px' }} />
                                    
                                </form>
                            </div>
                            <br />
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <input type="Submit" name="Submit" className="btn btn-md" value="CANCEL" style={{ backgroundColor: '#d90f23', color: '#fff', width: '142px ' }} />
                                <input type="Submit" name="Submit" className="btn btn-md " value="REVIEW RULE REVISION" style={{ backgroundColor: '#2d3f61', float: 'right', color: '#fff', width: '204px', marginLeft: '19rem' }} />
                                <input type="Submit" name="Submit" className="btn btn-md ml-2 " value="RULE DETAIL" style={{ backgroundColor: '#2d3f61', color: '#fff', float: 'right', width: '150px', }} />
                            </div>

                        </div>

                    </section>
                </div>
            </div>
        </div>            
    )
}
export default AlreadyDeployRiskRule