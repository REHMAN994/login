import React from "react";

import Header from "../header";
import RiskRuleCreateKey from "../RiskRuleCreateCard/CreateRiskRuleKey";
import Sidebar from "../side-bar";


const RiskRuleCreateKeyPage = () => {
    return (
        <>
            <Header/>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <Sidebar/>
                <RiskRuleCreateKey/>            
            </div>
            
        </>
    )
}
export default RiskRuleCreateKeyPage