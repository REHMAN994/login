import React from "react";

const CreateCondition = () => {
    return(
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">
                            <h1>Create CONDITION Reference Table</h1>
                            <div>
                                <form className="ml-auto" method="post">
                                    <label>CONDITION </label>
                                    <input type="text" placeholder="Condition " style={{width: '217px'}} />
                                    <label className="ml-2">TYPE </label>
                                    <input type="text" placeholder="Type " style={{width: '150px'}}/>

                                    <label className="ml-2">DESCRIPTION </label>
                                    <input type="text" placeholder="Description " style={{width: '240px'}} />
                                </form>
                                <input type="Submit" name="Submit" className="btn btn-md" value="Submit" style={{backgroundColor: '#2d3f61', color: '#fff', float: 'right'}} />

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>        
    )
}
export default CreateCondition