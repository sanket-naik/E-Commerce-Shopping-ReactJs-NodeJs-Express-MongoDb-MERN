import React from 'react'
import './css/Loading.css'

export default function Loading() {
    return (
        <div className="container">
            <div className="loading-page ">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>

        </div>
    )
}
