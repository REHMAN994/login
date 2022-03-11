import React from "react";

const UpdateDocType = () =>{
    return (
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">
                            <h1>UPDATE DOCUMENT TYPE </h1>
                            <div>
                                <form className="ml-auto" method="post">
                                    <label>Document Type</label>

                                    <select className="ml-2" style={{ width: '150px', height: '31px' }}>
                                        <option value="">Type 1 </option>
                                        <option value=""> 2</option>
                                        <option value=""> 3</option>
                                    </select>

                                    <label className="ml-5">Process Type</label>
                                    <input className="ml-2" type="text" placeholder="2" style={{ width: '50px' }} />

                                    <br />
                                    <label style={{ marginTop: '30px' }}>Agency Code</label>
                                    <select className="ml-2" style={{ width: '70px', height: '31px' }}>
                                        <option value="">code 1 </option>
                                        <option value=""> 2</option>
                                        <option value=""> 3</option>
                                    </select>

                                    <input className="ml-2" type="text" style={{ width: '100px' }} />

                                    <label className="ml-3">Transport Mode</label>
                                    <input className="ml-2" type="text" style={{ width: '50px' }} />

                                    <label className="ml-3">Movement Type</label>
                                    <input className="ml-2" type="text" style={{ width: '50px' }} />

                                    <br />
                                    <label className="ml-3" style={{ marginTop: '35px' }}>Description</label>
                                    <input className="ml-2" type="text" style={{ width: '390px' }} />
                                    <br />
                                </form>
                            </div>
                            <input type="Submit" name="Submit" className="btn btn-md center" value="Document Field" style={{ backgroundColor: '#2d3f61', color: '#fff', width: '142px', marginLeft: '33rem' }} />
                        </div>
                        <input type="Submit" name="Submit" className="btn btn-md" value="Cancel" style={{ backgroundColor: '#d90f23', color: '#fff', float: 'left' }} />
                        <input type="Submit" name="Submit" className="btn btn-md" value="Save" style={{ backgroundColor: '#2d3f61', color: '#fff', float: 'right' }} />
                    </section>
                </div>
            </div>
        </div>
    )
}
export default UpdateDocType
