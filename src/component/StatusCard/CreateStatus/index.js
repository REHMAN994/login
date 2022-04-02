import React from "react";

const CreateStatus = () => {
    return(
        <div>
            <div class="row" >
                <div class="col-md-10 col-lg-10">
                <section id="card">
                        <div className="well">
                            <h1>Create Status </h1>
                            <div className="inner-card">
                                <form className="ml-auto" method="post">
                                    <div style={{display:'flex'}}>
                                        <div >
                                            <label>Status Code </label>
                                            <br />
                                            <input type="text" placeholder="Status Code" style={{width: '28rem'}} />
                                     
                                        </div>
                                        <div style={{marginLeft:'4rem'}} >
                                            <label>Seq.No </label>
                                            <br />
                                            <input type="text" placeholder="Action" style={{width: '28rem'}} />
                                        </div>
                                    </div>
                                        <label>Process </label>
                                            <br />
                                        <input type="text" placeholder="Process"  />
                                    <br/>
                                    <label className="discription" style={{marginTop: '2rem'}}>Description </label>
                                    <br />
                                    <textarea id="w3review" name="w3review" rows="4" type="text" placeholder=" Description here.." style={{height: '5rem'}}></textarea>

                                </form>

                            </div>
                            <div className="button">
                                <button type="button" className="btn  btn-md btn-save">Save</button>
                                <button type="button" className="btn btn-md  btn-back">Back</button>

                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div >     
    )
}
export default CreateStatus