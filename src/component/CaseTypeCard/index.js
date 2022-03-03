import React from "react";

const CaseTypeDetails = () =>{
    return(
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">
                            <h1>CASE_TYPE Reference Table   </h1>
                            <h2>Update Details </h2>
                            <table className="table ">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">CASE_TYPE</th>
                                        <th scope="col">ACTION</th>
                                        <th scope="col">ACTION_DETAILS</th>
                                        <th scope="col">DESCRIPTION</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>XYZ</td>
                                        <td>Pending</td>
                                        <td>XXX</td>
                                        <td>Case-Type Reference Details </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>ABC</td>
                                        <td>Complete</td>
                                        <td>XXX</td>
                                        <td>Case-Type Reference Details</td>
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
export default CaseTypeDetails