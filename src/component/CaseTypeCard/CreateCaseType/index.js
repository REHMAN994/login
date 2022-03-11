import React from "react";

const CreateCaseType = () => {
    return(
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">
                            <h1>Create CASE TYPE Reference Table  </h1>
                            <div>
                                <form className="ml-auto" method="post">
                                    <label>CASE_TYPE </label>
                                    <input className="ml-2"type="text" placeholder="Case_Type " style={{width:'200px' }} />

                                    <label className="ml-3">ACTION </label>
                                    <input className="ml-2"type="text" placeholder="Action " style={{ width: '150px' }}/>

                                    <label className="ml-3">ACTION DETAILS</label>
                                    <input className="ml-2"type="text" placeholder="Action Details " style={{ width: '150px' }}/>
                                    <br/>
                                    <label>DESCRIPTION </label>
                                    <input className="ml-2"type="text" placeholder="Description " style={{width: '240px'}} />

                                    
                                </form>
                            </div>
                        </div>
                        <input type="Submit" name="Submit" className="btn btn-md" value="Submit" style={{backgroundColor:'#2d3f61', color: '#fff', float: 'right'}} />
                    </section>
                    
                </div>
            </div>        

        </div>        
    )
}
export default CreateCaseType