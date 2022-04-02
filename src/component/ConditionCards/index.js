import React from "react";
import { Switch } from "antd";
import 'antd/dist/antd.css';

const ConditionDetails = () =>{
    return(
        <div>
        
        <div className="row" >
            <div className="col-md-10 col-lg-10">
                <section id="card">
                    <div className="well" style={{width: '74rem'}}>
                        <h1 > Condition Details </h1>
                        <table className="table table-striped" style={{marginTop:"1rem"}}>
                             <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Ref</th>
                                    <th scope="col">Condition</th>
                                    <th scope="col">Symbol</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>Admin</td>
                                    <td>X</td>
                                    <td> Reference Details </td>
                                    <td><Switch/> </td>
                                    {/* <td><input type="Submit" name="Submit" className="btn btn-md" value="Edit" style={{ backgroundColor: '#2d3f61', color: '#fff' }} /></td> */}
                                    <td><button  data-toggle="modal" data-target="#myModal" style={{border:'none'}}><i className="fas fa-edit"></i></button> <i class="fa fa-trash ml-2" aria-hidden="true"></i></td>
                                </tr>
                                <tr>
                                    <td scope="row">2</td>
                                    <td>HR</td>
                                    <td>X</td>
                                    <td>Reference Details</td>
                                    <td><Switch/> </td>
                                    <td><button  data-toggle="modal" data-target="#myModal" style={{border:'none'}}><i className="fas fa-edit"></i></button> <i class="fa fa-trash ml-2" aria-hidden="true"></i></td>
                                </tr>
                                <tr>
                                    <td scope="row">3</td>
                                    <td>HR</td>
                                    <td>X</td>
                                    <td> Reference Details</td>
                                    <td><Switch/> </td>
                                    <td><button  data-toggle="modal" data-target="#myModal" style={{border:'none'}}><i className="fas fa-edit"></i></button> <i class="fa fa-trash ml-2" aria-hidden="true"></i></td>
                                    
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
                                    <h1> Condition Edit </h1>
                                    <div className="inner-card">
                                        <form className="ml-auto" method="post">
                                            <div style={{display:'flex'}}>
                                                <div>
                                                    <label>Condition </label>
                                                    <br />
                                                    <input type="text" placeholder="Condition" style={{ width: '15rem' }} />
                                                </div>
                                            
                                                <div  style={{marginLeft:'4rem'}}>
                                                    <label>Symbol</label>
                                                    <br/>
                                                    <input type="text" placeholder="Symbol" style={{ width: '15rem' }} />
                                                </div>
                                            </div>
                                            
                                            <br />
                                            <label className="discription" style={{ marginTop: '2rem' }}>Description </label>
                                            <br />
                                            <textarea id="w3review" name="w3review" rows="4" type="text" placeholder=" Description here.." style={{height: '5rem', width:'30rem'}}></textarea>

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
export default ConditionDetails