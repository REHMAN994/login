import React from "react";

const RelationshipUpdateeDoc = () => {
    return(
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                <section id="card">
                

                <div className="well" style={{ width: '64rem' }}>
                        <h1 > Update Document Relationships </h1>
                        <div>
                        <form className="ml-auto" >
                                    <div style={{display:'flex'}}>
                                        <label>Primary Document Type:</label>
                                        <p   style={{marginLeft:'1rem'}}>Document Type</p>
                                        <br/>
                                        <label className="ml-5">Process Type:</label>
                                        <p  style={{marginLeft:'1rem'}}>Process Type</p>
                                        <br/>
                                        
                                        
                                    </div>
                                   
                                    <div style={{display:'flex'}}>
                                    <label>Description:</label>
                                    <p  style={{marginLeft:'1rem'}}>Description here..</p>
                                    </div>
                                   
    
                                </form>
                            </div>
                    </div>
    
                    <div className="well" style={{ width: '64rem' }}>
                        <h1 > Update Document Relationships  </h1>
                        <table className="table table-striped" style={{ marginTop: "1rem" }}>
                            <thead className="thead-dark">
                                <tr>
                                    
                                    <th scope="col">Seq No.</th>
                                    <th scope="col">Relation Type</th>
                                    <th scope="col">Detail Document Type</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    
                                    <td>Seq No.  </td>
                                    <td>Relation Type</td>
                                    <td>Detail Document Type</td>
                                    <td><button data-toggle="modal" data-target="#myModal" style={{ border: 'none' }}><i className="fas fa-edit"></i></button> <i class="fa fa-trash ml-2" aria-hidden="true"></i></td>
                                </tr>
                                <tr>
                                
                                    <td>Seq No.  </td>
                                    <td>Relation Type</td>
                                    <td>Detail Document Type</td>
                                    <td><button data-toggle="modal" data-target="#myModal" style={{ border: 'none' }}><i className="fas fa-edit"></i></button> <i class="fa fa-trash ml-2" aria-hidden="true"></i></td>
                                </tr>
                                <tr>
                                
                                    <td>Seq No.  </td>
                                    <td>Relation Type</td>
                                    <td>Detail Document Type</td>
                                    <td><button data-toggle="modal" data-target="#myModal" style={{ border: 'none' }}><i className="fas fa-edit"></i></button> <i class="fa fa-trash ml-2" aria-hidden="true"></i></td>
    
                                </tr>
    
                            </tbody>
                        </table>
                        <hr style={{ border: '1px solid #2d3f61' }} />
                        <div className="inner-card">
                                    <form className="ml-auto" method="post">
                                    <h1>Update Entry </h1>
                                        <div style={{display:'flex'}}>
                                            
                                            <div>
                                            <label className="">Detail Document Type</label>
                                                <br />
                                                <input type="text" placeholder="Detail Document Type" style={{ width: '14rem', height:'40px' }} />
                                            </div>
                                        
                                            <div  style={{marginLeft:'4rem'}}>
                                            <label className="">Relation Type </label>
                                                <br/>
                                                <input type="text" placeholder="Relation Type" style={{ width: '14rem', height:'40px' }} />
                                            </div>
                                            
                                            <div  style={{marginLeft:'4rem'}}>
                                            <label className="">Seq No.</label>
                                                <br/>
                                                <input type="text" placeholder="Seq No." style={{ width: '14rem', height:'40px' }} />
                                            </div>
                                            
                                            <div  style={{marginLeft:'4rem', marginTop:'0.9rem'}}>
                                            <label className=""></label>
                                                <br/>
                                              
                                                 <button type="button" className="btn  btn-md btn-save" style={{  height:'40px' }}>Update</button>
                        
                                            </div>
                                        </div>
                                       
                                        <br />
                                       
                                    </form>
    
                                </div>
                        <div className="button">
                            <button type="button" className="btn  btn-md btn-save">Submit</button>
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
                            <section id="card" >
                                    <div className="well" style={{ width: '43rem' }}>
                                        <h1> Update Document Relationships Edit </h1>
                                        <div className="inner-card">
                                            <form className="ml-auto" method="post">
                                            <div style={{display:'flex'}}>
                                                <div >
                                                    <label>Seq No. </label>
                                                    <br />
                                                    <input type="text"  style={{width: '15rem'}} />
                                     
                                                </div>
                                                <div style={{marginLeft:'4rem'}} >
                                                    <label>Relation Type </label>
                                                    <br />
                                                    <input type="text" style={{width: '15rem'}} />
                                                </div>
                                            </div>
                                            <div style={{display:'flex', marginTop:'1rem'}}>
                                                
                                                <div >
                                                    <label>Detail Document Type</label>
                                                    <br/>
                                                    <input type="text"  style={{ width: '34rem' }} />
                                                </div>
                                                
                                            </div>
                                                
                                           </form>

                                        </div>
                                        <div className="button">
                                            <button type="button" className="btn  btn-md btn-save">Save</button>
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
export default RelationshipUpdateeDoc