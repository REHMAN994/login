import React from "react";

const RiskRuleUpdateCount = () => {
    return(
        <div>
            <div className="row">
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">
                            <h1> UPDATE RISK RULE -COUNT CONDITION </h1>
                            <div>
                                <form className="ml-auto" method="post">

                                    <label>Rule ID</label>
                                    <input className="ml-2" type="text" style={{ width: '50px' }} />
                                    <label className="ml-3">Document Type</label>
                                    <input className="ml-2" type="text" style={{ width: '100px' }} />
                                    <label className="ml-3">Threat Rule Set</label>
                                    <input className="ml-2" type="text" style={{ width: '100px' }} />
                                    <br />
                                    <label className="ml-5" style={{ marginTop: '10px' }}>Run Type</label>
                                    <input className="ml-2" type="text" style={{ width: '100px' }} />
                                    <label className="ml-5">Rule Method</label>
                                    <input className="ml-2" type="text" style={{ width: '100px' }} />
                                    <label className="ml-5">Case Type</label>
                                    <input className="ml-2" type="text" style={{ width: '100px' }} />
                                    <br />
                                    <hr style={{ border: '1px solid #2d3f61' }} />
                                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <label>Document Seq</label>
                                        <input className="ml-2" type="text" style={{ width: '100px', height: '30px' }} />
                                        <div className="ml-5">
                                            <label > Field Name </label>
                                            <select style={{ width: '70px' }}>
                                                <option value="">Field </option>
                                                <option value=""> 1</option>
                                                <option value=""> 2</option>
                                            </select>
                                            <br />
                                            <label > Condition Value </label>
                                            <select style={{ width: '70px' }}>
                                                <option value="">Value </option>
                                                <option value=""> 1</option>
                                                <option value=""> 2</option>
                                            </select>
                                            <br />
                                            <label>Count</label>
                                            <input className="ml-2" type="text" style={{ width: '60px' }} />
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <input type="Submit" name="Submit" className="btn btn-md center" value="CANCEL" style={{ backgroundColor: '#d90f23', color: '#fff', width: '142px' }} />
                                <input type="Submit" name="Submit" className="btn btn-md " value="REVIEW RULE" style={{ backgroundColor: '#2d3f61', color: '#fff', float: 'right', width: '150px', marginLeft: '17rem' }} />
                                <input type="Submit" name="Submit" className="btn btn-md ml-3" value="SAVE" style={{ backgroundColor: '#2d3f61', float: 'right', color: '#fff', width: '150px' }} />
                            </div>

                        </div>
                    </section>
                </div>
            </div>

        </div>
    )
}
export default RiskRuleUpdateCount