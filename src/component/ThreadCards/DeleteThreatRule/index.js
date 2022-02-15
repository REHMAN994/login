import React from "react";

const DeleteThreatDails = () =>{
    return(
        <div className="row" >
            <div className="col-md-10 col-lg-10">
                <section id="card">
                    <div className="well">
                        <h1> SELECT & DELETE THREAT RULE DETAILS  </h1>

                        <table className="table">

                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">THREAT_RULE</th>
                                    <th scope="col">DESCRIPTION</th>
                                    <th scope="col">SELECT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Rule 1</td>
                                    <td>Rule Type Reference Details </td>

                                    <td><input type="checkbox" /></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Rule 2</td>
                                    <td>Rule Type Reference Details</td>
                                    <td ><input type="checkbox" /></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <input type="Submit" name="Submit" className="btn btn-md" value="Delete" style={{backgroundColor: '#2d3f61', color:'#fff', float: 'right'}}/>
                </section>
            </div>
        </div>
    )
}
export default DeleteThreatDails