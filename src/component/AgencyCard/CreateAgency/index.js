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
                                    <label>AGENCY CODE </label>
                                    <input className="ml-2" type="text" placeholder="Agency Code" style={{width: '150px'}} />

                                    <label className="ml-3">UN/CEFACT </label>
                                    <input className="ml-2" type="text" style={{width: '50px'}} />

                                    <label className="ml-3">AGENCY NAME </label>
                                    <input className="ml-2" type="text" style={{width: '240px'}} />
                                </form>
                            </div>
                        </div>
                        <input type="Submit" name="Submit" className="btn btn-md" value="Submit" style={{backgroundColor:'#2d3f61', color: '#fff', float: 'right'}}/>
                    </section>
                </div>
            </div>

        </div>

    )
}
export default AgencyCreate