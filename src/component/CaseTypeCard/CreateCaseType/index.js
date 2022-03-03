import React from "react";

const CreateCaseType = () => {
    return(
        <div>
            <div class="row" >
                <div class="col-md-10 col-lg-10">
                    <section id="card">
                        <div class="well">
                            <h1>Create CASE TYPE Reference Table  </h1>
                            <div>
                                <form class="ml-auto" method="post">
                                    <label>CASE_TYPE </label>
                                    <input type="text" placeholder="Case_Type " style={{width:'200px' }} />

                                    <label class="ml-2">ACTION </label>
                                    <input type="text" placeholder="Action " style={{ width: '150px' }}/>

                                    <label class="ml-2">ACTION DETAILS</label>
                                    <input type="text" placeholder="Action Details " style={{ width: '150px' }}/>
                                    
                                    <label class="ml-2">DESCRIPTION </label>
                                    <input type="text" placeholder="Description " style={{width: '240px'}} />

                                    
                                </form>
                            </div>
                        </div>
                        <input type="Submit" name="Submit" class="btn btn-md" value="Submit" style={{backgroundColor:'#2d3f61', color: '#fff', float: 'right'}} />
                    </section>
                    
                </div>
            </div>        

        </div>        
    )
}
export default CreateCaseType