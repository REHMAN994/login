import React from "react";

import Header from "../header";
import AddNewDocFiled from "../MaintainDocTypeCard/AddNewDocField";
import Sidebar from "../side-bar";


const DocAddNewFieldPage = () => {
    return (
        <>
            <Header/>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <Sidebar/>
                <AddNewDocFiled/>
                
            </div>
            
        </>
    )
}
export default DocAddNewFieldPage