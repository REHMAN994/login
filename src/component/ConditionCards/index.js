import React from "react";

const ConditionDetails = () =>{
    return(
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">
                            <h1>CONDITION Reference Table   </h1>
                            <h2>Update Details </h2>
                            <table className="table">
                                
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">CONDITION</th>
                                        <th scope="col">TYPE</th>
                                        <th scope="col">DESCRIPTION</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Admin</td>
                                        <td>Type-1</td>
                                        <td>Condition Reference Details </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>HR</td>
                                        <td>Type-2</td>
                                        <td>Condition Reference Details</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div> 
        </div>
    )
}
export default ConditionDetails