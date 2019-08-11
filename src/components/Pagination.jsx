import React from 'react'

export default function Pagination() {
    return (
        <div className="container">
        <ul className="pagination d-flex justify-content-center">
            <li className="page-item"><span className="page-link" >Previous</span></li>
            <li className="page-item"><span className="page-link" >1</span></li>
            <li className="page-item active"><span className="page-link">2</span></li>
            <li className="page-item"><span className="page-link">3</span></li>
            <li className="page-item"><span className="page-link">Next</span></li>
        </ul>
        </div>
    )
}
