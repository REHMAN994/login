import React from "react";

const CreateThreatRule = () => {
    return (
        <div className="row">
            <div className="col-md-10 col-lg-10">
                <section id="card">
                    <div className="well">
                        <h1>Create Threat Group  </h1>
                        <div className="inner-card">
                                <form className="ml-auto" method="post">
                                    <label>Threat Group </label>
                                    <br />
                                    <input type="text" placeholder="Threat Group" style={{width: '60rem'}} />
                                    <br />
                                    <label className="discription" style={{marginTop: '2rem'}}>Description </label>
                                    <br />
                                    <input type="text" placeholder="Description here.." style={{height: '5rem'}} />

                                </form>

                            </div>
                            <div className="button">
                                <button type="button" className="btn  btn-md btn-save">Save</button>
                                <button type="button" className="btn btn-md  btn-back">Back</button>

                            </div>
                    </div>
                    
                </section >
            </div>
        </div>
    )
}
export default CreateThreatRule
