import React from "react";

const RiskRuleCreate = () => {
    return(
        <div>
            <div className="row">
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">
                            <h1> CREATE RISK RULE </h1>
                            <div>
                                <form className="ml-auto" method="post">
                                    <label>Document Type</label>
                                    <input className="ml-2" type="text" style={{width:'80px'}} />
                                    <label className="ml-5">Threat Rule Set</label>
                                    <input className="ml-2" type="text" style={{width:'80px'}} />
                                    <br />
                                    <label className="ml-3" style={{marginTop:'10px'}}>Run Type</label>
                                    <input className="ml-2" type="text" style={{width:'100px'}} />
                                    <label className="ml-3">Rule Method</label>
                                    <input className="ml-2" type="text" style={{width:'100px'}} />
                                    <label className="ml-3">Case Type</label>
                                    <input className="ml-2" type="text" style={{width:'100px'}}/>
                                    <br />
                                    <hr style={{border: '1px solid #2d3f61'}} />
                                    <label>Document Seq</label>
                                    <input className="ml-2" type="text" style={{width:'100px'}} />

                                    <label className="ml-3">Rule Name</label>
                                    <input className="ml-2" type="text" style={{width:'100px'}} />
                                    <br />
                                    <label className="ml-3" style={{marginTop: '10px'}}>Description</label>
                                    <input className="ml-2" type="text" style={{width:'30rem'}} />
                                    <br />

                                    <label style={{marginTop: '10px'}}>Weighting%</label>
                                    <input className="ml-2" type="text" style={{width:'50px'}} />
                                    <label className="ml-5">Number Conditions</label>
                                    <input className="ml-2" type="text" style={{width:'50px'}} />
                                </form>
                            </div>
                            <br/>
                            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                <input type="Submit" name="Submit" className="btn btn-md center" value="CANCEL" style={{ backgroundColor: '#d90f23', color: '#fff',width: '142px'}} />
                                <input type="Submit" name="Submit" className="btn btn-md " value="REVIEW RULE" style={{backgroundColor: '#2d3f61', color: '#fff', float: 'right' ,  width: '150px', marginLeft: '10rem'}} />
                                <input type="Submit" name="Submit" className="btn btn-md ml-3" value="SAVE" style={{ backgroundColor:'#2d3f61',  float: 'right', color: '#fff',  width: '150px'}} />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    )
}
export default RiskRuleCreate