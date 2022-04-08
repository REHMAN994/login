import React from "react";

const RiskRuleCreateKey = () => {
    return(
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">
                            <h1>Create Risk Rule Keys </h1>
                            <div>
                                <form className="ml-auto" method="post">
                                    
                                    <div>
                                        <label>Document Type </label>
                                        <br />
                                        <select className="dropdown_value" style={{ width: '60rem' }}>
                                            <option value="">Type </option>
                                            <option value=""> 1</option>
                                            <option value=""> 2</option>
                                        </select>
                                    </div>
                                    <div style={{ display: 'flex',marginTop: '1rem' }}>    
                                        <div>
                                            <label>Threat Rule Set </label>
                                            <br/>
                                            <select className="dropdown_value" style={{width: '28rem'}}>
                                                <option value="">Type </option>
                                                <option value=""> 1</option>
                                                <option value=""> 2</option>
                                            </select>
                                        </div>
                                        <div style={{marginLeft:'4rem'}}>
                                            <label>Rule Type </label>
                                            <br/>
                                            <select className="dropdown_value" style={{width: '28rem'}}>
                                                <option value="">Rule </option>
                                                <option value=""> 1</option>
                                                <option value=""> 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div style={{ display: 'flex',marginTop: '1rem' }}> 
                                        <div>
                                            <label>Rule Method</label>
                                            <br/>
                                            <input placeholder="Rule Method" type="text" style={{width: '28rem'}} />
                                        </div>
                                        
                                        <div style={{marginLeft:'4rem'}}>
                                            <label> Case Type </label>
                                            <br/>
                                            <select className="dropdown_value" style={{width: '28rem'}}>
                                                <option value="">Case </option>
                                                <option value=""> 1</option>
                                                <option value=""> 2</option>
                                            </select>
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
export default RiskRuleCreateKey