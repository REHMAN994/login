import React from "react";

const RiskRuleCreateCondition = () => {
    return(
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">
                            <h1>CREATE RISK RULE CONDITION </h1>
                            <div>
                                <form className="ml-auto" method="post">
                                    <label> Rule ID</label>
                                    <input className="ml-2" type="text" style={{width:'60px'}} />
                                    <label className="ml-3">Document Type</label>
                                    <input className="ml-2" type="text" style={{width:'100px'}} />

                                    <label className="ml-3">Threat Group</label>
                                    <input className="ml-2" type="text" style={{width:'100px'}} />
                                    <br />
                                    <label style={{marginTop:'10px'}} >Rule Type</label>
                                    <input className="ml-2" type="text" style={{width:'50px'}} />
                                    <label className="ml-3">Rule Method</label>
                                    <input className="ml-2" type="text" style={{width:'50px'}}  />
                                    <label className="ml-3">Case Type</label>
                                    <input className="ml-2" type="text" style={{width:'100px'}} />
                                    <label className="ml-3">Document Seq</label>
                                    <input className="ml-2" type="text" style={{width:'50px'}}  />
                                    <br />
                                    <label style={{marginTop:'10px'}}>Rule Nmae</label>
                                    <input className="ml-2" type="text" style={{width:'150px'}}  />
                                    <label className="ml-3">Weighting %</label>
                                    <input className="ml-2" type="text" style={{width:'50px'}}  />
                                    <label className="ml-3">Number Conditions</label>
                                    <input className="ml-2" type="text" style={{width:'50px'}}  />
                                </form>
                            </div>

                            <table className="table" style={{marginTop:'10px'}}>

                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Seq No</th>
                                        <th scope="col">Field Name</th>
                                        <th scope="col">Condition Value </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>xx</td>
                                        <td>xxxx</td>
                                        <td>xx</td>
                                    </tr>
                                    <tr>
                                        <td>xx</td>
                                        <td>xxxx</td>
                                        <td>xx</td>
                                    </tr>

                                </tbody>
                            </table>

                            <form method="post">
                                <hr style={{ border: '1px solid #2d3f61'}} />
                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <td><input type="text" style={{width: '50px', float: 'left', marginLeft: '44px'}}/></td>
                                            <td><input type="text" style={{width: '70px', float: 'left', marginRight: '40px'}} /></td>
                                            <td><input type="text" style={{width: '70px', float: 'left' }}/></td>
                                        </tr>
                                    </thead>
                                </table>
                            </form>
                            <input type="Submit" name="Submit" className="btn btn-md center" value=" CONFIRM ENTRY" style={{ backgroundColor:  '#2d3f61', color: '#fff',  width: '150px', marginLeft: '32rem'}} />
                        </div>
                        <input type="Submit" name="Submit" className="btn btn-md" value="Cancel" style={{backgroundColor:'#d90f23', color: '#fff', float: 'left'}} />
                        <input type="Submit" name="Submit" className="btn btn-md" value="Exit Screen" style={{backgroundColor: '#2d3f61', color: '#fff', float: 'right'}} />
                    </section>
                </div>
            </div>
        </div>
    )
}
export default RiskRuleCreateCondition    