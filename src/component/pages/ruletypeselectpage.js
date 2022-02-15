import React from "react";

import Header from "../header";
import Sidebar from "../side-bar";

import SelectRuleType from "../RuleTypeCards/SelectRuleType";

const RuleTypeSelectPage = () => {
    return (
        <>
            <Header/>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <Sidebar/>
                <SelectRuleType/>
                
            </div>
            
        </>
    )
}
export default RuleTypeSelectPage