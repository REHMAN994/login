import React from "react";
import { Switch } from "antd";
import 'antd/dist/antd.css';

const CaseTypeDetails = () =>{
    return(
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well" style={{ width: '74rem' }}>
                            <h1> Case Type Details </h1>
                            <table className="table table-striped" style={{ marginTop: "1rem" }}>
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">CaseType</th>
                                        <th scope="col">Action</th>
                                        <th scope="col">Action Details</th>
                                        <th scope="col">Discription</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Edit</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">1</td>
                                        <td>Admin</td>
                                        <td>xxx</td>
                                        <td>Case Type Reference </td>
                                        <td>Details</td>
                                        <td><Switch /> </td>
                                        {/* <td><input type="Submit" name="Submit" className="btn btn-md" value="Edit" style={{ backgroundColor: '#2d3f61', color: '#fff' }} /></td> */}
                                        <td><button data-toggle="modal" data-target="#myModal" style={{ border: 'none' }}><i className="fas fa-edit"></i></button> <i class="fa fa-trash ml-2" aria-hidden="true"></i></td>
                                    </tr>
                                    <tr>
                                        <td scope="row">2</td>
                                        <td>HR</td>
                                        <td>xxx </td>
                                        <td>Case Type Reference</td>
                                        <td>Details</td>
                                        <td>  <Switch />  </td>
                                        <td><button data-toggle="modal" data-target="#myModal" style={{ border: 'none' }}><i className="fas fa-edit"></i></button> <i class="fa fa-trash ml-2" aria-hidden="true"></i></td>
                                    </tr>
                                    <tr>
                                        <td scope="row">2</td>
                                        <td>Sales</td>
                                        <td>xxx </td>
                                        <td>Case Type Reference</td>
                                        <td>Details</td>
                                        <td>  <Switch />  </td>
                                        <td><button data-toggle="modal" data-target="#myModal" style={{ border: 'none' }}><i className="fas fa-edit"></i></button> <i class="fa fa-trash ml-2" aria-hidden="true"></i></td>
                                    </tr>

                                </tbody>
                            </table>
                            <div className="button">
                                <button type="button" className="btn  btn-md btn-save">Update</button>
                                <button type="button" className="btn btn-md  btn-back">Back</button>

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
                                        <h1> Case Type Edit </h1>
                                        <div className="inner-card">
                                            <form className="ml-auto" method="post">
                                            
                                                <div >
                                                    <label>Case Type </label>
                                                    <br />
                                                    <input type="text" placeholder="Case Type" style={{width: '34rem'}} />
                                     
                                                </div>
                                            
                                            <div style={{display:'flex', marginTop:'1rem'}}>
                                                
                                                <div >
                                                    <label>Action</label>
                                                    <br/>
                                                    <input type="text" placeholder="Action" style={{ width: '15rem' }} />
                                                </div>
                                                <div style={{marginLeft:'4rem'}}>
                                                    <label>Action Details</label>
                                                    <br/>
                                                    <input type="text" placeholder="Action Details" style={{ width: '15rem' }} />
                                                </div>
                                                
                                            </div>
                                                
                                                <label className="discription" style={{ marginTop: '1rem' }}>Description </label>
                                                <br />
                                                <textarea id="w3review" name="w3review" rows="4" type="text" placeholder=" Description here.." style={{height: '5rem', width:'34rem'}}></textarea>

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
export default CaseTypeDetails