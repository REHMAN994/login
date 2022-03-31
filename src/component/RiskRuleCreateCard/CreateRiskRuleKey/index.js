import React from "react";

const RiskRuleCreateKey = () => {
    return(
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">
                            <h1>CREATE RISK RULE -SELECT KEYS </h1>
                            <div>
                                <form className="ml-auto" method="post">
                                    <label>Document Type </label>
                                    <select className="ml-2" style={{width: '162px'}}>
                                        <option value="">Type </option>
                                        <option value=""> 1</option>
                                        <option value=""> 2</option>
                                    </select>
                                    <label className="ml-5">Threat Rule Set </label>
                                    <select className="ml-2" style={{width: '162px'}}>
                                        <option value="">Rule </option>
                                        <option value=""> 1</option>
                                        <option value=""> 2</option>
                                    </select>
                                    <br />
                                    <label className="ml-5" style={{marginTop:'10px'}}> Rule Type </label>
                                    <select className="ml-2"style={{width: '60px'}}>
                                        <option value="">Rule </option>
                                        <option value=""> 1</option>
                                        <option value=""> 2</option>
                                    </select>

                                    <label className="ml-3">Rule Method</label>
                                    <input className="ml-2" type="text" style={{width: '60px'}} />

                                    <label className="ml-3"> Case Type </label>
                                    <select className="ml-2" style={{width: '60px'}}>
                                        <option value="">Case </option>
                                        <option value=""> 1</option>
                                        <option value=""> 2</option>
                                    </select>
                                </form>                                
                            </div>
                        </div>
                        <input type="Submit" name="Submit" className="btn btn-md ml-2" value="SAVE" style={{ backgroundColor: '#2d3f61', float: 'right', color: '#fff', width: '150px' }} />    
                    </section>
                   
                </div>
            </div>
        </div>
    )
}
export default RiskRuleCreateKey