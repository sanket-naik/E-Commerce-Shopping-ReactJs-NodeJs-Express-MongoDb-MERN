import React from 'react'
import './css/SearchBar.css'

export default function SearchBar(props) {
    return (
        <div className="container-search">
            <div className="row">
                        <div className="col text-center">
                        <h1>Search For Products</h1>
                        <p className="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>
                        </div>
                    </div>
        <div className="row">
            <div className="col-12">
                <div id="custom-search-input">
                    <div className="input-group">
                        <input type="text" className="search-query form-control" value={props.ItemValue} onChange={props.onChangeFilter} placeholder="Enter Product Name" />
                        <span className="input-group-btn">
                            <button type="button" disabled>
                                <span className="fa fa-search"></span>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
