import React,{useState} from "react";
import { Switch } from "antd";
import 'antd/dist/antd.css';

const RuleTypeDetails = () => {

    return(
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well" style={{width: '74rem'}}>
                            <h1 > Update Rule Type </h1>
                            <table className="table table-striped" style={{marginTop:"1rem"}}>
                                 <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Rule Type</th>
                                        <th scope="col">Case_Type</th>
                                        <th scope="col">Decision</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">1</td>
                                        <td>Admin</td>
                                        <td>X</td>
                                        <td>Rule Type Reference Details </td>
                                        <td>  <Switch/>  </td>
                                        {/* <td><input type="Submit" name="Submit" className="btn btn-md" value="Edit" style={{ backgroundColor: '#2d3f61', color: '#fff' }} /></td> */}
                                        <td><i className="fas fa-edit"></i></td>
                                    </tr>
                                    <tr>
                                        <td scope="row">2</td>
                                        <td>HR</td>
                                        <td>X</td>
                                        <td>Rule Type Reference Details</td>
                                        <td><Switch/> </td>
                                        <td><i className="fas fa-edit"></i></td>
                                    </tr>
                                    <tr>
                                        <td scope="row">3</td>
                                        <td>HR</td>
                                        <td>X</td>
                                        <td>Rule Type Reference Details</td>
                                        <td><Switch/> </td>
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
            <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="row" >
                            <div className="col-md-10 col-lg-10">
                                <section id="card" style={{ width: '106%' }}>
                                    <div className="well">
                                        <h1> Rule Type Edit </h1>
                                        <div className="inner-card">
                                            <form className="ml-auto" method="post">
                                                <label>Rule Type </label>
                                                <br />
                                                <input type="text" placeholder="Rule Type" style={{ width: '30rem' }} /><label>Rule Type </label>
                                                <label>Case_Type</label>
                                                <br/>
                                                <input type="text" placeholder="Rule Type" style={{ width: '30rem' }} />
                                                <br />
                                                <label className="discription" style={{ marginTop: '2rem' }}>Description </label>
                                                <br />
                                                <input type="text" placeholder="Description here.." style={{ height: '5rem' }} />

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
export default RuleTypeDetails