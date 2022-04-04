import React from "react";

const AgencyCreate = () =>{
    return(
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">
                            <h1>Create Agency Reference Table  </h1>
                            <div>
                                <form className="ml-auto" method="post">
                                    <div style={{display: 'flex'}}>
                                        <div>
                                            <label>AGENCY CODE </label>
                                            <br/>
                                            <input  type="text" placeholder="Agency Code" style={{width: '28rem'}} />
                                        </div>
                                    
                                        <div style={{marginLeft:'4rem'}}>
                                            <label>UN/CEFACT </label>
                                            <br/>
                                            <input type="text" style={{width: '28rem'}} />
                                        </div>
                                    </div>
                                    
                                    <br/>
                                    <label>AGENCY NAME </label>
                                    <br/>
                                    <input type="text" style={{width: '60rem'}} />
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
export default AgencyCreate