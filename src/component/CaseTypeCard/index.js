import React from "react";
import { Switch } from "antd";
import 'antd/dist/antd.css';

const CaseTypeDetails = () =>{
    return(
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                <section id="card">
                        <div className="well" style={{width: '74rem'}}>
                            <h1 > Update Case Type </h1>
                            <table className="table table-striped" style={{marginTop:"1rem"}}>
                                 <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">CaseType</th>
                                        <th scope="col">Action</th>
                                        <th scope="col">Action Details</th> 
                                        <th scope="col">Decision</th>
                                        <th scope="col">Edit</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">1</td>
                                        <td>Admin</td>
                                        <td>  <Switch/>  </td>
                                        <td>Case Type Reference </td>
                                        <td>Details</td>
                                        {/* <td><input type="Submit" name="Submit" className="btn btn-md" value="Edit" style={{ backgroundColor: '#2d3f61', color: '#fff' }} /></td> */}
                                        <td><i className="fas fa-edit"></i></td>
                                    </tr>
                                    <tr>
                                        <td scope="row">2</td>
                                        <td>HR</td>
                                        <td><Switch/> </td>
                                        <td>Case Type Reference</td>
                                        <td>Details</td>
                                        <td><i className="fas fa-edit"></i></td>
                                    </tr>
                                    <tr>
                                    <td scope="row">2</td>
                                        <td>Sales</td>
                                        <td><Switch/> </td>
                                        <td>Case Type Reference</td>
                                        <td>Details</td>
                                        <td><i className="fas fa-edit"></i></td>
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
        </div>
    )
}
export default CaseTypeDetails