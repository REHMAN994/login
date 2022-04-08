import React from "react";
import "./cardone.css";

const CreatDoc = () =>{
    return (
        <div className="container">
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well" >
                            <h1 style={{marginTop:'0rem'}}>Create Document Type</h1>
                            <div className="inner-card">
                                <form className="ml-auto" method="post">
                                    <div>
                                        <label>Document Type </label>
                                        <br />
                                        <input type="text" placeholder="Document Type" />
                                    </div>
                                    <br />
                                    <div style={{ display: 'flex' }}>
                                        <div >
                                            <label>Process Type </label>
                                            <br />
                                            <input type="text" placeholder="Process Type" style={{ width: '28rem' }} />

                                        </div>
                                        <div style={{ marginLeft: '4rem' }} >
                                            <label>Agency code </label>
                                            <br />

                                            <select className="dropdown_value" style={{ width: '100px', height: '31px', }}>
                                                <option value="">code  </option>
                                                <option value=""> 2</option>
                                                <option value=""> 3</option>
                                            </select>
                                        {/* <input type="text" placeholder="Agency Name" style={{width: '19.5rem'}} /> */}
                                        </div>
                                        <div style={{ marginLeft: '2rem' }} >
                                            <label>Agency Name </label>
                                            <br />
                                            <input type="text" placeholder="Agency Name" style={{ width: '19.5rem' }} />
                                        </div>
                                    </div>
                                    <br />
                                    <div style={{ display: 'flex' }}>
                                        <div >
                                            <label>Transport mode </label>
                                            <br />
                                            <input type="text" placeholder="Transport mode" style={{ width: '28rem' }} />

                                        </div>
                                        <div style={{ marginLeft: '4rem' }} >
                                            <label>Movement Type </label>
                                            <br />
                                            <input type="text" placeholder="Movement Type" style={{ width: '28rem' }} />
                                        </div>
                                    </div>


                                    <label className="discription" style={{ marginTop: '2rem' }}>Description </label>
                                    <br />
                                    <textarea id="w3review" name="w3review" rows="4" type="text" placeholder=" Description here.." style={{ height: '5rem' }}></textarea>

                                </form>

                            </div>
                            <div className="button">
                                <button type="button" className="btn  btn-md btn-save">Save</button>
                                <button type="button" className="btn btn-md  btn-back">Back</button>

                            </div>

                        </div>
                    </section>
                </div>
            </div >
        </div >
    )
}
export default CreatDoc
