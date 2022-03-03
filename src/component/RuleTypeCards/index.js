import React from "react";

const RuleTypeDetails = () => {
    return(
        <div>
            <div class="row" >
                <div class="col-md-10 col-lg-10">
                    <section id="card">
                        <div class="well">
                            <h1>RULE TYPE REFERENCE TABLE </h1>
                            <h2>Update Details </h2>
                            <table class="table">
                                 <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">RULE_TYPE</th>
                                        <th scope="col">CASE_TYPE</th>
                                        <th scope="col">DESCRIPTION</th>
                                        <th scope="col">ON/OFF</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Admin</td>
                                        <td>X</td>
                                        <td>Rule Type Reference Details </td>
                                        <td>ON </td>

                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>HR</td>
                                        <td>X</td>
                                        <td>Rule Type Reference Details</td>
                                        <td>OFF</td>
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
export default RuleTypeDetails