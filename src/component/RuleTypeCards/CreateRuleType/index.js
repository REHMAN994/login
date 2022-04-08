import React from "react";

const CreateRuleType = () => {
    return(
        <div className="">
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">
                            <h1>Create Rule Type  </h1>
                            <div className="inner-card">
                                <form className="ml-auto" method="post">
                                    <label>Rule Type </label>
                                    <br />
                                    <input type="text" placeholder="Rule Type" style={{ width: '60rem' }} />
                                    <br />
                                    <label className="discription" style={{ marginTop: '2rem' }}>Description </label>
                                    <br />
                                    <textarea id="w3review" name="w3review" rows="4" type="text" placeholder=" Description here.." style={{ height: '5rem' }}></textarea>

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
        </div>
    )
}
export default CreateRuleType