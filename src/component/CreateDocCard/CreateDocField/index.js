import React from "react";


const CreatDocField = () =>{
    return (
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                <section id="card">
                    

                        <div className="well" >
                            <h1 > Create Document Details </h1>
                            <form className="ml-auto" >
                                <div style={{ display: 'flex' }}>
                                    <label>Document Type</label>
                                    <p>Document Type</p>
                                    <br />
                                    <label className="ml-5">Agency Name</label>
                                    <p>Agency Name</p>
                                    <br />
                                    <label className="ml-5">Agency Code</label>
                                    <p>Agency Code</p>

                                </div>
                                <div style={{ display: 'flex' }}>
                                    <label>Process Type</label>
                                    <p>Process Type</p>
                                    <br />
                                    <label className="ml-5">Transport Mode</label>
                                    <p>Transport Mode</p>
                                    <br />
                                    <label className="ml-5">Movement Type</label>
                                    <p>Movement Type</p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <label>Description</label>
                                    <p>Description here..</p>
                                </div>
                            </form>
                        </div>
    
                    <div className="well">
                            <h1 > Create Document Fields Table </h1>
                            <table className="table table-striped" style={{ marginTop: "1rem" }}>
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Field Name</th>
                                        <th scope="col">Field Type</th>
                                        <th scope="col">Field Size</th>
                                        <th scope="col">System Reference</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">Field Name</td>
                                        <td>xxxx</td>
                                        <td>xx</td>
                                        <td>Status Reference  </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Field Name</td>
                                        <td>xxxx</td>
                                        <td>xx</td>
                                        <td>Status Reference </td>
    
                                        
                                    </tr>
                                    <tr>
                                        <td scope="row">Field Name</td>
                                        <td>xxxx</td>
                                        <td>xx</td>
                                        <td>Status Reference </td>
    
                                    </tr>
    
                                </tbody>
                            </table>
                            <hr style={{ border: '1px solid #2d3f61' }} />
                            <div className="inner-card">
                                <form className="ml-auto" method="post">
                                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>

                                        <input type="text" placeholder="Field Name" style={{ width: '12rem'}} />
                                        <input type="text" placeholder="Field Type" style={{ width: '12rem', marginLeft: '3rem' }} />
                                        <input type="text" placeholder="Field Size" style={{ width: '12rem', marginLeft: '3rem' }} />
                                        <input type="text" placeholder="System Ref" style={{ width: '12rem', marginLeft: '3rem' }} />
                                    </div>
                                </form>

                            </div>
                            <div className="button">
                                <button type="button" className="btn  btn-md btn-save" style={{width:'8rem'}}>Confrim Entry</button>
                                <button type="button" className="btn btn-md  btn-back">Back</button>
    
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default CreatDocField