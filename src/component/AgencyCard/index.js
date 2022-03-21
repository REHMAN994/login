import React from "react";

const AgencyDetails = () =>{
    return(
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">
                            <h1>AGENCY REFERENCE TABLE </h1>
                            <h2>Update Details </h2>
                            <table className="table"> 
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">AGENCY CODE</th>
                                        <th scope="col">UN/CEFACT</th>
                                        <th scope="col">AGENCY NAME</th>
                                        <th scope="col">ON/OFF</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>XX</td>
                                        <td>XXX </td>
                                        <td>XXXXXX</td>
                                        <td>ON </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>XX</td>
                                        <td>XXX</td>
                                        <td>XXXXXX</td>
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
export default AgencyDetails