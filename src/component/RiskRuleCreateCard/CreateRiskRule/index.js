import React from "react";

const RiskRuleCreate = () => {
    return(
        <div>
            <div className="row">
                <div className="col-md-10 col-lg-10">
                <section id="card">
                            <div className="well">
                                <h1 style={{marginTop: '0rem'}}>Create Risk Rule</h1>
                                <form className="ml-auto" >
                                    <div style={{display:'flex'}}>
                                        <label>Document Type</label>
                                        <p>Document Type</p>
                                        <br/>
                                        <label className="ml-5">Threat Rule set</label>
                                        <p>Threat Rule set</p>
                                        <br/>
                                        <label className="ml-5">Rule Type</label>
                                        <p>Rule Type</p>
                                        
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <label>Rule Method</label>
                                        <p>Rule Method</p>
                                        <br/>
                                        <label className="ml-5">Case Type</label>
                                        <p>Case Type</p>
                                        
                                    </div>
                                
                                </form>
                                
                            </div>
                    </section>
                    <section id="card">
                        <div className="well">
                            <h1> Create Risk Rule </h1>
                            <div>
                                <form className="ml-auto" method="post">
                                    <div style={{ display: 'flex' }}>
                                        <div>
                                            <label>Document Seq</label>
                                            <br />
                                            <input placeholder="350" type="text" style={{ width: '28rem' }} />
                                        </div>

                                        <div style={{marginLeft:'4rem'}}>
                                            <label>Rule Name</label>
                                            <br />
                                            <input placeholder="Rule Name" type="text" style={{ width: '28rem' }} />
                                        </div>
                                    </div>
                                   
                                    <label style={{marginTop: '1rem'}}>Description</label>
                                    <br />
                                    <input type="text" placeholder=" Description here.." style={{ width: '60rem' }} />
                                    <div style={{ display: 'flex',marginTop: '1rem' }}>
                                        <div>
                                            <label>Weighting%</label>
                                            <br />
                                            <input placeholder="50" type="text" style={{ width: '28rem' }} />
                                        </div>
                                        <div style={{marginLeft:'4rem'}}>
                                            <label >Number Conditions</label>
                                            <br />
                                            <input placeholder="2" type="text" style={{ width: '28rem' }} />
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="button" style={{marginTop: '2rem'}}>
                                <button type="button" className="btn  btn-md btn-save" style={{float:'left', width:'10rem'}}>Review Rules</button>
                                <button type="button" className="btn  btn-md btn-save"style={{ width:'7rem'}}>Save</button>
                                <button type="button" className="btn btn-md  btn-back">Back</button>

                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    )
}
export default RiskRuleCreate