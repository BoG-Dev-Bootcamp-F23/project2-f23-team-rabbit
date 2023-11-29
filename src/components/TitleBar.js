import React from "react";

export default function TitleBar() {
    return (
        <div className="title-bar-container">
            <div className="title-bar-left">
                <img src="/images/appLogo.png" alt="app logo" className="app-logo"/>
                <h1>Progress</h1>
            </div>
            <div className="title-bar-right">
                <div className="title-bar-right-search-container">
                    <img src="/images/searchLogo.png" alt="search logo" className="title-bar-right-search-logo"/>
                    <input type="text" placeholder="Search" className="title-bar-right-search-input"/>
                </div>
            </div>
        </div>
    )
}