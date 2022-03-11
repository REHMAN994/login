import React from "react";

const PrimaryDocType = () => {
    return(
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">
                            <h1>SELECT PRIMARY DOCUMENT TYPE </h1>
                            <div>
                                <form className="ml-auto" method="post">
                                    <label> PRIMARY Document Type</label>

                                    <select className="ml-2" style={{width: '150px', height:'31px'}}>
                                        <option value="">Type 1 </option>
                                        <option value=""> 2</option>
                                        <option value=""> 3</option>
                                    </select>

                                    <label className="ml-5">Process Type</label>
                                    <input type="text" placeholder="2" style={{width: '50px'}} />

                                    <br />

                                    <label className="ml-4" style={{marginTop: '35px'}}>Description</label>
                                    <input type="text" style={{width: '390px'}} />

                                </form>
                            </div>
                        </div>
                        <input type="Submit" name="Submit" className="btn btn-md" value="Cancel" style={{backgroundColor: '#d90f23', color: '#fff', float: 'left'}} />
                        <input type="Submit" name="Submit" className="btn btn-md" value="Save" style={{backgroundColor: '#2d3f61', color: '#fff', float: 'right'}} />
                    </section>
                </div>
            </div>
        </div>            
    )
}
export default PrimaryDocType