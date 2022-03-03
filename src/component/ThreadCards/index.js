import React from "react";

const ThreatRuleDetails = () => {
    return(
        <div className="row" >
            <div className="col-md-10 col-lg-10">
                <section id="card">
                    <div className="well">
                        <h1>THREAT GROUP SET REFERENCE TABLE </h1>
                        <h2>Update Details </h2>
                        <table className="table">
                            
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">THREAT Group </th>
                                    <th scope="col">DESCRIPTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Rule 1</td>
                                    <td>Rule Type Reference Details </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Rule 2</td>
                                    <td>Rule Type Reference Details</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </section>
            </div>
        </div>
    )
}
export default ThreatRuleDetails