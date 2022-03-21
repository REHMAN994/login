import React from "react";

const CreateRuleType = () => {
    return(
        <div>
            <div class="row" >
                <div class="col-md-10 col-lg-10">
                    <section id="card">
                        <div class="well">
                            <h1>Create RULE TYPE Ref </h1>
                            <div>
                                <form class="ml-auto" method="post">
                                    <label> RULE TYPE</label>
                                        <input className="ml-2" type="text" placeholder="Rule Type" style={{ width: '150px' }} />
                                    <label class="ml-2">CASE TYPE</label>
                                        <input className="ml-2" type="text" placeholder="Case Type" style={{ width: '150px' }} />
                                    <label class="ml-2">DESCRIPTION</label>
                                        <input className="ml-2" type="text" placeholder="Description" style={{ width: '217px' }} />
                                </form>
                            </div>
                            
                        </div>
                        <input type="Submit" name="Submit" class="btn btn-md" value="Save" style={{ backgroundColor: '#2d3f61', color: '#fff', float: 'right' }} />
                    </section>
                    
                </div>
            </div>
        </div>            
    )
}
export default CreateRuleType