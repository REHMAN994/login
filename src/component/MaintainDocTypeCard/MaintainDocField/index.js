import React from "react";

const MaintainDocFiled = () =>{
    return (
        <div className="">
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                            <div className="well">
                                <h1 style={{marginTop: '0rem'}}>Documents Fields</h1>
                                <form className="ml-auto" >
                                    <div style={{display:'flex'}}>
                                        <label>Document Type</label>
                                        <p>Document Type</p>
                                        <br/>
                                        <label className="ml-5">Agency Name</label>
                                        <p>Agency Name</p>
                                        <br/>
                                        <label className="ml-5">Agency Code</label>
                                        <p>Agency Code</p>
                                        
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <label>Process Type</label>
                                        <p>Process Type</p>
                                        <br/>
                                        <label className="ml-5">Transport Mode</label>
                                        <p>Transport Mode</p>
                                        <br/>
                                        <label className="ml-5">Movement Type</label>
                                        <p>Movement Type</p>
                                    </div>
                                    <div style={{display:'flex'}}>
                                    <label>Description</label>
                                    <p>Description here..</p>
                                    </div>
                                   

                                </form>
                                
                            </div>
                    </section>
                    <section id="card">
                        <div className="well">
                            <h1 style={{marginTop: '0rem'}}>Maintain Document Fields </h1>
                            
                            <table className="table table-striped" style={{ marginTop: '20px' }}>

                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Ref</th>
                                        <th scope="col">Field Name</th>
                                        <th scope="col">Field Type </th>
                                        <th scope="col">Field Size</th>
                                        <th scope="col">System Ref </th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>xxxx</td>
                                        <td>xxx</td>
                                        <td>xx</td>
                                        <td>xxxx</td>
                                        <td><button data-toggle="modal" data-target="#myModal" type="button" className="btn btn-md" style={{ backgroundColor: '#ECF7F2', color: '#03995D', borderColor: '#03995D',fontWeight: '600' }}>Amend Entry </button><i class="fa fa-trash ml-4" aria-hidden="true"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>xxxx</td>
                                        <td>xxx</td>
                                        <td>xx</td>
                                        <td>xxxx</td>
                                        <td><button data-toggle="modal" data-target="#myModal" type="button" className="btn btn-md" style={{ backgroundColor: '#ECF7F2', color: '#03995D', borderColor: '#03995D',fontWeight: '600' }}>Amend Entry </button><i class="fa fa-trash ml-4" aria-hidden="true"></i></td>
                                    </tr>

                                </tbody>
                            </table>
                            <hr style={{ border: '1px solid #2d3f61' }} />
                            <h1>Add New Field</h1>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                
                                <input type="text" placeholder="Field Name" style={{ width: '10rem'}} />
                                <input type="text" placeholder="Field Type" style={{ width: '10rem',marginLeft: '3rem'}} />
                                <input type="text" placeholder="Field Size" style={{ width: '10rem',marginLeft: '3rem' }} />
                                <input type="text" placeholder="System Ref" style={{ width: '10rem',marginLeft: '3rem' }} />
                                <button type="button" className="btn btn-md" style={{ backgroundColor: '#ECF7F2',
                                color: '#03995D',
                                borderColor: '#03995D',
                                fontWeight: '600',
                                marginLeft: '2rem',
                                width: '8rem' }}> <i class="fa fa-plus mr-1" aria-hidden="true"></i> Add Field </button>
                            </div>
                            <div className="button">
                                <button type="button" className="btn  btn-md btn-save">Next</button>
                                <button type="button" className="btn  btn-md btn-save" style={{ marginRight: '14px' }}>Previous</button>
                                <button type="button" className="btn btn-md  btn-back">Cancel</button>

                            </div>

                        </div>

                        
                    </section>
                </div>
            </div>
            <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="row" >
                            <div className="col-md-10 col-lg-10">
                                <section id="card">
                                    <div className="well" style={{width: '44rem'}} >
                                        <h1> Update Document Fields</h1>
                                        <table className="table table-striped" style={{ marginTop: "1rem" }}>
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

                                                </tr>

                                            </tbody>
                                        </table>
                                        <hr style={{ border: '1px solid #2d3f61' }} />

                                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>

                                            <input type="text" placeholder="Field Name" style={{ width: '7rem', marginLeft: '2rem' }} />
                                            <input type="text" placeholder="Field Type" style={{ width: '7rem', marginLeft: '3rem' }} />
                                            <input type="text" placeholder="Field Size" style={{ width: '7rem', marginLeft: '3rem' }} />
                                            <input type="text" placeholder="System Ref" style={{ width: '7rem', marginLeft: '3rem' }} />

                                        </div>
                                        <div className="button">
                                            <button type="button" className="btn  btn-md btn-save">Update</button>
                                            <button type="button" className="btn btn-md  btn-back">Back</button>

                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
        
    )
}
export default MaintainDocFiled