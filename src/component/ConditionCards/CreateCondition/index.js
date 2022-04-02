import React from "react";

const CreateCondition = () => {
    return(
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                <section id="card">
                        <div className="well">
                            <h1>Create Condition </h1>
                            <div className="inner-card">
                                <form className="ml-auto" method="post">
                                    <div style={{display:'flex'}}>
                                        <div >
                                            <label>Condition </label>
                                            <br />
                                            <input type="text" placeholder="Condition" style={{width: '28rem'}} />
                                     
                                        </div>
                                        <div style={{marginLeft:'4rem'}} >
                                            <label>Symbol </label>
                                            <br />
                                            <input type="text" placeholder="Symbol" style={{width: '28rem'}} />
                                        </div>
                                    </div>
                                   
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
        </div>        
    )
}
export default CreateCondition