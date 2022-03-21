import React from "react";
import AgencyCreate from "../AgencyCard/CreateAgency";
import Header from "../header";
import Sidebar from "../side-bar";


const AgencyCreatePage = () => {
    return (
        <>
            <Header/>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <Sidebar/>
                <AgencyCreate/>
                
            </div>
            
        </>
    )
}
export default AgencyCreatePage