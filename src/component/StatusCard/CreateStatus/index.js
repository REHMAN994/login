import React from "react";

const CreateStatus = () => {
    return(
        <div>
            <div class="row" >
                <div class="col-md-10 col-lg-10">
                    <section id="card">
                        <div class="well">
                            <h1>Create STATUS Reference Table  </h1>
                            <div>
                                <form class="ml-auto" method="post">
                                    <label>STATUS_CUDE </label>
                                        <input type="text" placeholder="Status_Cude " style={{width: '180px'}} />
                                    <label class="ml-2">PROCESS </label>
                                        <input type="text" placeholder="Process " style={{width: '180px'}}/>
                                    <label class="ml-2">SEQ_NO  </label>
                                        <input type="text" placeholder="Seq_No " style={{width: '100px'}} />
                                    <label>DESCRIPTION </label>
                                        <input type="text" placeholder="Description " style={{width: '240px'}}/>
                                </form>
                            </div>
                        </div>
                        <input type="Submit" name="Submit" class="btn btn-md" value="Submit" style={{backgroundColor:'#2d3f61', color: '#fff', float: 'right' }}/>
                    </section>
                </div>
            </div>
        </div >     
    )
}
export default CreateStatus