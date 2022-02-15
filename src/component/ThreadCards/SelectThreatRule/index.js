import React from "react";

const SelectThreatRule = () => {
    return(
        <div className="row" >
            <div className="col-md-10 col-lg-10">
                <section id="card">
                    <div className="well">
                        <h1> Select THREAT RULE SET Reference </h1>
                        <div>
                            <form className="ml-auto" method="post">
                                <label> THREAT RULE SET </label>
                                <select style={{width: '162px'}}>
                                    <option value="">Threat Rule</option>
                                    <option value="">Rule 1</option>
                                    <option value="">Rule 2</option>
                                </select>
                                <label className="ml-2">DESCRIPTION</label>
                                <input type="text" placeholder="Description" style={{width: '217px'}} />

                                {/* <label className="ml-2">ON/OFF
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" id="customSwitches" />
                                        <label className="custom-control-label" for="customSwitches"></label>
                                    </div>
                                </label> */}
                            </form>
                        </div>
                    </div>
                    <input type="Submit" name="Submit" className="btn btn-md" value="Save" style={{backgroundColor: '#2d3f61', color: '#fff', float: 'right'}} />
                </section>
            </div>
        </div>

    )
}
export default SelectThreatRule