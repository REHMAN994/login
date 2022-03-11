import React from "react";

const RelationshipCreateDoc = () => {
    return(
        <div>
            <div className="row" >
                <div className="col-md-10 col-lg-10">
                    <section id="card">
                        <div className="well">

                            <h1>CREATE DOCUMENT RELATUIONSHIPS </h1>
                            <div>
                                <form className="ml-auto" method="post">
                                    <label> PRIMARY Document Type</label>
                                    <input className="ml-2" type="text" style={{width: '150px'}} />
                                    <label className="ml-5">Process Type</label>
                                    <input className="ml-2" type="text" style={{width: '60px'}} />
                                    <br />
                                    <label className="ml-3" style={{marginTop: '35px'}}>Description</label>
                                    <input type="text" style={{width: '408px'}} />
                                </form>
                            </div>

                            <table className="table" style={{marginTop: '20px'}}>

                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Seq</th>
                                        <th scope="col">DETAIL Doc Type</th>
                                        <th scope="col">Rel Type </th>
                                        <th scope="col">Seq No</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>xxxx</td>
                                        <td>xxx</td>
                                        <td>xx</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>xxxx</td>
                                        <td>xxx</td>
                                        <td>xx</td>
                                    </tr>

                                </tbody>
                            </table>
                            <hr style={{ border: '1px solid #2d3f61'}} />
                            <form method="post">
                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <td></td>
                                            <td >
                                                <select style={{width: '90px', height: '31px', marginLeft: '3rem'}}>
                                                    <option value=""> 1 </option>
                                                    <option value=""> 2</option>
                                                    <option value=""> 3</option>
                                                </select>
                                            </td>

                                            <td><input type="text" style={{width :'50px'}} /></td>
                                            <td><input type="text" style={{width :'50px'}} /></td>

                                        </tr>
                                    </thead>
                                </table>
                            </form>
                            <input type="Submit" name="Submit" className="btn btn-md center" value=" ADD DETAIL DOC TYPE" style={{ backgroundColor:  '#2d3f61', color: '#fff',  width: '193px', marginLeft: '32rem'}} />
                        </div>
                        <input type="Submit" name="Submit" className="btn btn-md" value="Cancel" style={{backgroundColor: '#d90f23', color: '#fff', float: 'left'}} />
                        <input type="Submit" name="Submit" className="btn btn-md" value="Submit" style={{backgroundColor: '#2d3f61', color: '#fff', float: 'right'}} />
                    </section>
                </div>
            </div>

        </div>            
    )
}
export default RelationshipCreateDoc