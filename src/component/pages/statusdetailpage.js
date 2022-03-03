import React from "react";
import Header from "../header";
import Sidebar from "../side-bar";
import DetailStatus from "../StatusCard";

const StatusDetailPage = () => {
    return (
        <>
            <Header/>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <Sidebar/>
                <DetailStatus/>
            </div>
            
        </>
    )
}
export default StatusDetailPage