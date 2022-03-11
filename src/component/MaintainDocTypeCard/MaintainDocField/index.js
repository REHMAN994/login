import React from "react";

const MaintainDocFiled = () =>{
    return (
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">

                            <h1>MAINTAIN DOCUMENT FIELDS </h1>
                            <div>
                                <form className="ml-auto" method="post">
                                    <label>Document Type</label>
                                    <input className="ml-2" type="text" style={{ width: '150px' }} />
                                    <label className="ml-5">Process Type</label>
                                    <input className="ml-2" type="text" style={{ width: '60px' }} />
                                    <br />
                                    <label style={{ marginTop: '30px' }}>Agency Code</label>
                                    <input className="ml-2" type="text" style={{ width: '50px' }} />
                                    <input className="ml-2" type="text" style={{ width: '70px' }} />

                                    <label className="ml-3">Transport Mode</label>
                                    <input className="ml-2" type="text" style={{ width: '50px' }} />

                                    <label className="ml-3">Movement Type</label>
                                    <input className="ml-2" type="text" style={{ width: '50px' }} />
                                    <br />
                                    <label className="ml-3" style={{ marginTop: '35px' }}>Description</label>
                                    <input className="ml-2" type="text" style={{ width: '382px' }} />
                                </form>
                            </div>

                            <table className="table" style={{ marginTop: '20px' }}>

                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Ref</th>
                                        <th scope="col">Field Name</th>
                                        <th scope="col">Field Type </th>
                                        <th scope="col">Field Size</th>
                                        <th scope="col">System Ref </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>xxxx</td>
                                        <td>xxx</td>
                                        <td>xx</td>
                                        <td>xxxx</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>xxxx</td>
                                        <td>xxx</td>
                                        <td>xx</td>
                                        <td>xxxx</td>
                                    </tr>

                                </tbody>
                            </table>
                            <hr style={{ border: '1px solid #2d3f61' }} />
                            <form method="post">
                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <td><input type="text" style={{ width: '90px', float: 'right' }} /></td>
                                            <td><input type="text" style={{ width: '50px', marginLeft:'13px'}} /></td>
                                            <td><input type="text" style={{ width: '50px' }} /></td>
                                            <td><input type="text" style={{ width: '60px' }} /></td>
                                        </tr>
                                    </thead>
                                </table>
                            </form>
                            <hr style={{ border: '1px solid #2d3f61' }} />
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <input type="Submit" name="Submit" className="btn btn-md center" value="ADD NEW FIELD" style={{ backgroundColor: '#2d3f61', color: '#fff', width: '142px' }} />
                                <h4 style={{ marginLeft: '2rem' }}>OR</h4>

                                <h4 style={{ marginLeft: '1rem' }}>Enter Ref No</h4>
                                <input className="ml-2" type="text" style={{ width: '40px' }} />

                                <h4 className="ml-2">To</h4>
                                <input type="Submit" name="Submit" className="btn btn-md ml-2" value="AMEND ENTRY" style={{ backgroundColor: '#2d3f61', color: '#fff', width: '142px' }} />

                            </div>

                        </div>

                        <input type="Submit" name="Submit" className="btn btn-md" value="Cancel" style={{ backgroundColor: '#d90f23', color: '#fff', float: 'left' }} />
                        <input type="Submit" name="Submit" className="btn btn-md mr-2" value="Prev" style={{ backgroundColor: '#2d3f61', color: '#fff', float: 'right' }} />
                        <input type="Submit" name="Submit" className="btn btn-md " value="Next" style={{ backgroundColor: '#2d3f61', color: '#fff', float: 'right', marginRight: '1rem' }} />
                    </section>
                </div>
            </div>

        </div>
    )
}
export default MaintainDocFiled