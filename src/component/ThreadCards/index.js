import React from "react";
import { Switch } from "antd";
import 'antd/dist/antd.css';

const ThreatRuleDetails = () => {
    return(
        <div >
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                <section id="card">
                        <div className="well" style={{width: '74rem'}}>
                            <h1 > Update Threat Group </h1>
                            <table className="table table-striped" style={{marginTop:"1rem"}}>
                                 <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Threat Group</th>
                                        <th scope="col">Decision</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">1</td>
                                        <td>Admin</td>
                                        <td>Threat Group Details </td>
                                        <td>  <Switch /> </td>
                                        {/* <td><input type="Submit" name="Submit" className="btn btn-md" value="Edit" style={{ backgroundColor: '#2d3f61', color: '#fff' }} /></td> */}
                                        <td><i className="fas fa-edit"></i></td>
                                    </tr>
                                    <tr>
                                        <td scope="row">2</td>
                                        <td>HR</td>
                                        <td>Threat Group Details</td>
                                        <td><Switch/> </td>
                                        <td><i className="fas fa-edit"></i></td>
                                    </tr>
                                    <tr>
                                        <td scope="row">3</td>
                                        <td>HR</td>
                                        <td>Threat Group Details</td>
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
        </div>
        
    )
}
export default ThreatRuleDetails