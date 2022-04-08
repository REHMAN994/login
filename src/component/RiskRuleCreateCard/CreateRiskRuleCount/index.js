import React from "react";

const RiskRuleCreateCount = () => {
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
                            <h1>Create Risk Rule Count </h1>
                            <div>
                                <form className="ml-auto" method="post">
                                    <div style={{display:'flex'}}>
                                        <label>Document Seq</label>
                                        <p>350</p>
                                       
                                    </div>
                                   
                                    <div style={{ display: 'flex',marginTop: '1rem' }}>    
                                        <div>
                                            <label>Field Name </label>
                                            <br/>
                                            <select className="dropdown_value" style={{width: '28rem'}}>
                                                <option value="">Field Name </option>
                                                <option value=""> 1</option>
                                                <option value=""> 2</option>
                                            </select>
                                        </div>
                                        <div style={{marginLeft:'4rem'}}>
                                            <label>Condition value </label>
                                            <br/>
                                            <select className="dropdown_value" style={{width: '28rem'}}>
                                                <option value="">Condition value </option>
                                                <option value=""> 1</option>
                                                <option value=""> 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div style={{marginTop: '1rem' }}>
                                        <label>Count</label>
                                            <br />
                                        <input placeholder="Count" type="text" style={{ width: '28rem' }} />
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
export default RiskRuleCreateCount