import React from "react";

const CreateThreatRule = () => {
    return (
        <div className="row">
            <div className="col-md-10 col-lg-10">
                <section id="card">
                    <div className="well">
                        <h1>Create THREAT RULE  </h1>
                        <div>
                            <form className="ml-auto" method="post">
                                <label> THREAT RULE</label>
                                <input type="text" placeholder="Threat Rule" style={{ width: '150px' }} />
                                <label className="ml-2">DESCRIPTION</label>
                                <input type="text" placeholder="Description" style={{ width: '217px' }} />
                                <label className="ml-2">ON/OFF
                                    <input type="text" placeholder="Description" style={{ width: '100px' }} />
                                </label>
                            </form>
                        </div>
                    </div>
                    <input type="Submit" name="Submit" className="btn btn-md" value="Submit" style={{ backgroundColor: '#2d3f61', color: '#fff', float: 'right' }} />
                </section >
            </div>
        </div>
    )
}
export default CreateThreatRule
