import React from "react";

const RuleTypeDetails = () => {
    return(
        <div>
            <div class="row" >
                <div class="col-md-10 col-lg-10">
                    <section id="card">
                        <div class="well">
                            <h1>RULE TYPE REFERENCE TABLE </h1>
                            <h2>Select Details </h2>
                            <table class="table">
                                 <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">RULE_TYPE</th>
                                        <th scope="col">CASE_TYPE</th>
                                        <th scope="col">DESCRIPTION</th>
                                        <th scope="col">ON/OFF</th>
                                        <th scope="col">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Admin</td>
                                        <td>X</td>
                                        <td>Rule Type Reference Details </td>
                                        <td>ON </td>
                                        {/* <td><input type="Submit" name="Submit" class="btn btn-md" value="Edit" style={{ backgroundColor: '#2d3f61', color: '#fff' }} /></td> */}
                                        <td><button data-toggle="modal" data-target="#myModal" className="btn btn-md" style={{ backgroundColor: '#2d3f61', color: '#fff' }} >Edit </button></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>HR</td>
                                        <td>X</td>
                                        <td>Rule Type Reference Details</td>
                                        <td>OFF</td>
                                        <td><button data-toggle="modal" data-target="#myModal" className="btn btn-md" style={{ backgroundColor: '#2d3f61', color: '#fff' }} >Edit </button></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </section>
                    
                </div>
            </div>
            <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="row" >
                            <div className="col-md-10 col-lg-10">
                                <section id="card" style={{width: '106%'}}>
                                    <div className="well">
                                        <h1>Select RULE TYPE Ref </h1>
                                        <div>
                                            <form className="ml-auto" method="post">
                                                <label> RULE TYPE </label>
                                                <input className="ml-2" type="text" placeholder="Description" style={{ width: '150px', height: '33px' }} />

                                                <label className="ml-2"> CASE TYPE </label>
                                                <input className="ml-2" type="text" placeholder="Description" style={{ width: '150px', height: '33px' }} />
                                                 <br/>   
                                                <label style={{ marginTop: '11px'}}>DESCRIPTION</label>
                                                <input className="ml-2" type="text" placeholder="Description" style={{ width: '250px', height: '33px' }} />

                                               
                                            <input type="Submit" name="Submit" className="btn btn-md" value="Save" style={{ backgroundColor: '#2d3f61', color: '#fff', float: 'right' }} />
                                            </form>
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