import React from "react";

import Header from "../header";
import Sidebar from "../side-bar";
import DeleteThreatDails from "../ThreadCards/DeleteThreatRule";

const ThreatRuleDeletepage = () => {
    return (
        <>
            <Header/>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <Sidebar/>
                <DeleteThreatDails/>
                
            </div>
            
        </>
    )
}
export default ThreatRuleDeletepage