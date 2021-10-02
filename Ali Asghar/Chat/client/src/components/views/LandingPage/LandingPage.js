import React from 'react'
import { FaCode } from "react-icons/fa";

function LandingPage() {
    return (
        <>
        <div className="app">
            <FaCode style={{ fontSize: '4rem' }} />
            <span style={{ fontSize: '2rem' }}>Programming Assistant!</span>
        </div>
        <div style={{ float:'right' }}>Programming Assistant</div>
        </>
    )
}

export default LandingPage
