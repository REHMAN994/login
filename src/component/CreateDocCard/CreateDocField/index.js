import React from "react";


const CreatDocField = () =>{
    return (
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">

                            <h1>CREATE DOCUMENT FIELDS </h1>
                            <div>
                                <form className="ml-auto" method="post">
                                    <label>Document Type</label>
                                    <input className="ml-2" type="text" style={{ width: '150px' }} />
                                    <label className="ml-5">Process Type</label>
                                    <input className="ml-2" type="text" style={{ width: '60px' }} />
                                    <br />
                                    <label style={{ marginTop: '30px' }}>Agency Code</label>
                                    <input className="ml-2" type="text" style={{ width: '60px' }} />

                                    <label className="ml-3">Transport Mode</label>
                                    <input className="ml-2" type="text" style={{ width: '60px' }} />

                                    <label className="ml-3">Movement Type</label>
                                    <input className="ml-2" type="text" style={{ width: '60px' }} />
                                    <br />
                                    <label className="ml-3" style={{ marginTop: '35px' }}>Description</label>
                                    <input className="ml-2" type="text" style={{ width: '408px' }} />
                                </form>
                            </div>

                            <table className="table" style={{marginTop: '20px'}}>

                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Field Name</th>
                                        <th scope="col">Field Type </th>
                                        <th scope="col">Field Size</th>
                                        <th scope="col">System Ref </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>xxxx</td>
                                        <td>xxx</td>
                                        <td>xx</td>
                                        <td>xxxx</td>


                                    </tr>
                                    <tr>
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
                                            <td><input type="text" style={{ width: '90px', float: 'left' }} /></td>
                                            <td><input type="text" style={{ width: '50px', float: 'left' }} /></td>
                                            <td><input type="text" style={{ width: '50px' }} /></td>
                                            <td><input type="text" style={{ width: '60px' }} /></td>
                                        </tr>
                                    </thead>
                                </table>
                            </form>
                        </div>
                        <input type="Submit" name="Submit" className="btn btn-md" value="Cancel" style={{ backgroundColor: '#d90f23', color: '#fff', float: 'left' }} />
                        <input type="Submit" name="Submit" className="btn btn-md" value="Submit" style={{ backgroundColor: '#2d3f61', color: '#fff', float: 'right' }} />
                    </section>
                </div>
            </div>
        </div>
    )
}
export default CreatDocField