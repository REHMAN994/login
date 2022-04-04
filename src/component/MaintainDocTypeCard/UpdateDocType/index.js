import React from "react";

const UpdateDocType = () =>{
    return (
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">
                            <h1>Update Document Type </h1>
                            <div>
                                <form className="ml-auto" method="post">
                                    <label>Document Type</label>
                                    <select className="dropdown_value_larg">
                                            <option value="">Select Type </option>
                                            <option value=""> 2</option>
                                            <option value=""> 3</option>
                                    </select>
                                    <br/>
                                    <div style={{display:'flex',marginTop: '1rem'}}>
                                        <div>
                                            <label>Process Type</label>
                                            <br/>
                                            <input  type="text" p style={{ width: '28rem' }} />
                                        </div>
                                        <div style={{marginLeft:'2rem'}}>
                                            
                                                <label>Agency Code</label>
                                                <br/>
                                                <select className="dropdown_value">
                                                        <option value="">code 1 </option>
                                                        <option value=""> 2</option>
                                                        <option value=""> 3</option>
                                                </select>
                                           <input type="text" style={{ width: '22rem', marginLeft:'1rem' }} />
                                        </div>
                                    </div>
                                   
                                    <div  style={{display:'flex',marginTop: '1rem'}}>
                                        <div>
                                            <label >Transport Mode</label>
                                            <br/>
                                            <input  type="text" style={{ width: '28rem' }} />
                                        </div>
                                        <div style={{marginLeft:'2rem'}}>
                                            <label>Movement Type</label>
                                            <br/>
                                            <input  type="text" style={{ width: '30rem' }} />
                                        </div>
                                    </div>
                                   <br />
                                    <label>Description</label>
                                    <textarea id="w3review" name="w3review" rows="4" type="text" placeholder=" Description here.." style={{height: '5rem'}}></textarea>
                                </form>
                            </div>
                            <div className="button">
                                <button type="button" className="btn  btn-md btn-save" style={{float:'left',width: '10rem'}}>Document Field</button>
                                <button type="button" className="btn  btn-md btn-save">Update</button>
                                <button type="button" className="btn btn-md  btn-back">Back</button>

                            </div>
                        </div>
                       
                    </section>
                </div>
            </div>
        </div>
    )
}
export default UpdateDocType
