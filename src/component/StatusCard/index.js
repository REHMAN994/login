import React from "react";

const DetailsStatus = () => {
    return(
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">
                            <h1>STATUS Reference Table   </h1>
                            <h2>Update Details </h2>
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">STATUS_CODE </th>
                                        <th scope="col">PROCESS</th>
                                        <th scope="col">SEQ_NO </th>
                                        <th scope="col">DESCRIPTION</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>XYZ</td>
                                        <td>Pending</td>
                                        <td>xxx</td>
                                        <td>Status Reference Details </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>ABC</td>
                                        <td>Complete</td>
                                        <td>xxx</td>
                                        <td>Status Reference Details</td>
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
export default DetailsStatus