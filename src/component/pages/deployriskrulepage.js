import React from "react";
import DeployRiskRule from "../DeployRiskRuleCard/DeployRiskRule";
import Header from "../header";
import Sidebar from "../side-bar";


const DeployRiskRulePage = () => {
    return (
        <>
            <Header/>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <Sidebar/>
                <DeployRiskRule/>
                
            </div>
            
        </>
    )
}
export default DeployRiskRulePage