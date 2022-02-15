import React from "react";

import Header from "../header";
import RuleTypeDetails from "../RuleTypeCards";
import Sidebar from "../side-bar";


const RuleTypeDetailsPage = () => {
    return (
        <>
            <Header/>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <Sidebar/>
                <RuleTypeDetails/>
                
            </div>
            
        </>
    )
}
export default RuleTypeDetailsPage