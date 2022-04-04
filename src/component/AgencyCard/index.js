import React from "react";
import { Switch } from "antd";
import 'antd/dist/antd.css';

const AgencyDetails = () =>{
    return(
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                <section id="card">
                        <div className="well" style={{ width: '74rem' }}>
                            <h1> Agency Details </h1>
                            <table className="table table-striped" style={{ marginTop: "1rem" }}>
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Agency Code</th>
                                        <th scope="col">Un/Cefact</th>
                                        <th scope="col">Agency Name</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Edit</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">1</td>
                                        <td>xxxx</td>
                                        <td>xxx</td>
                                        <td>Agency Name </td>
                                        <td><Switch /> </td>
                                        {/* <td><input type="Submit" name="Submit" className="btn btn-md" value="Edit" style={{ backgroundColor: '#2d3f61', color: '#fff' }} /></td> */}
                                        <td><button data-toggle="modal" data-target="#myModal" style={{ border: 'none' }}><i className="fas fa-edit"></i></button> <i class="fa fa-trash ml-2" aria-hidden="true"></i></td>
                                    </tr>
                                    <tr>
                                        <td scope="row">2</td>
                                        <td>xxxx</td>
                                        <td>xxx </td>
                                        <td>Agency Name</td>
                                        <td>  <Switch />  </td>
                                        <td><button data-toggle="modal" data-target="#myModal" style={{ border: 'none' }}><i className="fas fa-edit"></i></button> <i class="fa fa-trash ml-2" aria-hidden="true"></i></td>
                                    </tr>
                                    <tr>
                                        <td scope="row">2</td>
                                        <td>xxxx</td>
                                        <td>xxx </td>
                                        <td>Agency Name</td>
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
                                        <h1> Agency Details Edit </h1>
                                        <div className="inner-card">
                                            <form className="ml-auto" method="post">
                                            <div style={{display: 'flex'}}>
                                                <div>
                                                    <label>AGENCY CODE </label>
                                                    <br/>
                                                    <input  type="text"  style={{width: '15rem'}} />
                                                </div>
                                    
                                                <div style={{marginLeft:'4rem'}}>
                                                    <label>UN/CEFACT </label>
                                                    <br/>
                                                    <input type="text" style={{width: '15rem'}} />
                                                </div>
                                            </div>
                                                <br/>
                                                <label>Agency Name  </label>
                                                <br />
                                                <input type="text" style={{width: '28rem'}} />

                                            </form>

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
export default AgencyDetails