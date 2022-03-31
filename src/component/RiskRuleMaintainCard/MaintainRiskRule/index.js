import React from "react";

const RiskRuleMaintain = () => {
    return(
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">

                            <h1>MAINTAIN RISK RULE CONDITION </h1>
                            <div>
                                <form className="ml-auto" method="post">
                                    <label> Rule ID</label>
                                    <input className="ml-2" type="text" style={{width: '60px'}}/>
                                    <label className="ml-3">Document Type</label>
                                    <input className="ml-2" type="text" style={{width: '100px'}} />

                                    <label className="ml-3">Threat Group</label>
                                    <input className="ml-2" type="text" style={{width: '100px'}} />
                                    <br />
                                    <label style={{ marginTop: '10px' }}>Rule Type</label>
                                    <input className="ml-2" type="text" style={{width: '50px'}} />
                                    <label className="ml-3">Rule Method</label>
                                    <input className="ml-2" type="text" style={{width: '50px'}} />
                                    <label className="ml-3">Case Type</label>
                                    <input className="ml-2" type="text" style={{width: '100px'}} />
                                    <label className="ml-3">Document Seq</label>
                                    <input className="ml-2" type="text" style={{width: '50px'}} />
                                    <br />
                                    <label style={{ marginTop: '10px' }}>Rule Name</label>
                                    <input className="ml-2" type="text" style={{width: '150px'}} />
                                    <label className="ml-3">Weighting %</label>
                                    <input className="ml-2" type="text" style={{width: '50px'}}/>
                                    <label className="ml-3">Number Conditions</label>
                                    <input className="ml-2" type="text" style={{width: '50px'}} />
                                    <label className="ml-3">Status</label>
                                    <input className="ml-2" type="text" style={{width: '50px'}} />
                                </form>
                            </div>

                            <table className="table" style={{marginTop: '20px'}}>

                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Ref</th>
                                        <th scope="col">Seq No</th>
                                        <th scope="col">Field Name</th>
                                        <th scope="col">Condition Value </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>xx</td>
                                        <td>xxxx</td>
                                        <td>xx</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>xx</td>
                                        <td>xxxx</td>
                                        <td>xx</td>
                                    </tr>
                                </tbody>
                            </table>

                            <br />
                            <div className="ml-5" style={{display: 'flex', flexWrap: 'wrap' }}>
                                <input type="Submit" name="Submit" className="btn btn-md center" value="ADD NEW ENTRY" style={{backgroundColor:'#2d3f61', color: '#fff'}} />
                                <h4 className="ml-3">OR Enter No</h4>
                                <input className="ml-3" type="text" style={{width: '50px'}} />
                                <h4 className="ml-3">TO</h4>
                                <button type="Submit" name="Submit" className="btn btn-md center ml-3" style={{backgroundColor: '#2d3f61', color: '#fff'}}>AMEND ENTRY</button>
                            </div>
                        </div>
                        <input type="Submit" name="Submit" className="btn btn-md" value="Cancel" style={{backgroundColor:'#d90f23', color: '#fff', float: 'right'}} />
                    </section>
                </div>
            </div>
        </div>            
    )
}
export default RiskRuleMaintain