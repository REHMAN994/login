import React from "react";
import CaseTypeDetails from "../CaseTypeCard";
import Header from "../header";
import Sidebar from "../side-bar";


const CaseTypeDetailsPage = () => {
    return (
        <>
            <Header/>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <Sidebar/>
                <CaseTypeDetails/>
                
            </div>
            
        </>
    )
}
export default CaseTypeDetailsPage