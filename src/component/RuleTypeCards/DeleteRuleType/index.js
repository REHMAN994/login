import React from "react";

const DeleteRuleType = () => {
    return(
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">
                            <h1> SELECT & DELETE RULE TYPE REF  </h1>

                            <table className="table">

                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">RULE_TYPE</th>
                                        <th scope="col">DESCRIPTION</th>
                                        <th scope="col">SELECT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Admin</td>
                                        <td>Rule Type Reference Details </td>

                                        <td><input type="checkbox" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>HR</td>
                                        <td>Rule Type Reference Details</td>
                                        <td ><input type="checkbox" /></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <input type="Submit" name="Submit" className="btn btn-md" value="Delete" style={{ backgroundColor: '#2d3f61', color: '#fff', float: 'right' }} />
                    </section>
                </div>
            </div>

        </div>        
    )
}
export default DeleteRuleType