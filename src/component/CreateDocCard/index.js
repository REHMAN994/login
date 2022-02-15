import React from "react";
import "./cardone.css";

const CreatDoc = () =>{
    return(
        <div className="contaner-fluid">
            <div className="row">
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">
                            <h1>Create Document</h1>
                            <div>
                                <form className="ml-auto" method="post">
                                    <label>Document Name </label>
                                    <input type="text" placeholder="Document Name" style={{width: '217px'}} />
                                    <label className="ml-2">Document Type </label>
                                    <select placeholder="Document Type" style={{width: '162px'}}>
                                        <option value="">Document Type</option>
                                        <option value="">type 1</option>
                                        <option value="">type 2</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <input type="Submit" name="Submit" className="btn btn-md" value="Submit" style={{backgroundColor:  '#2d3f61', color: '#fff', float: 'right'}} />
                    </section>
                </div>
            </div>

        </div>    
    )
}
export default CreatDoc
