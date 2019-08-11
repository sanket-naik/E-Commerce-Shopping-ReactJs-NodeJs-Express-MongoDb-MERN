import React,{useContext, useState, useEffect} from 'react'
import {ProductsConsumer} from './Context/ProductsContext'
import {Link} from 'react-router-dom'
import Loading from './Loading'

export default function Details({match}) {

    const products= useContext(ProductsConsumer)
    const [Product, setProduct] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() =>  {
        const data=products.ProductList.find((p)=>p._id=== match.params.id)
        setProduct(data)
        setloading(products.Loading)
    },[match.params.id, products.Loading, products.ProductList]) 

    const {_id, company, title, img, price, info, inCart}=Product
    
    return (
       
        <div className="container ">
            
            {loading?<div style={{marginTop:'35vh'}}><Loading/></div>:(
            <div>
            <div className="row">
                <div className="col-10 mx-auto text-center my-5">
                    <h1>{title}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={require(`${img}`)} className="img-fluid" alt="product"/>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                    <h3>Model : {title}</h3>
                    <h5 className="text-title  mt-3 mb-2">
                        Made by : {company}
                    </h5>
                    <h5 className="text-blue">
                        Price : {price.toLocaleString()} &#x20b9; 
                    </h5>
                    <p className=" mt-3 mb-0 font-weight-bold">
                        Information about product: 
                    </p>
                    <p className="text-muted ">{info}</p>
                    <div>
                        <Link to="/">
                            <button className="btn btn-info">Back</button>
                        </Link>
                        <button disabled={inCart?true:false} onClick={()=>products.onClickCart(_id)} className="btn btn-dark ml-4">
                        {inCart?(
                            <span><i className="fas fa-shopping-cart" ></i> In Cart</span>
                            ):(
                                <span><i className="fas fa-shopping-cart"></i> Add</span> 
                            )}
                        </button>
                    </div>
                </div>
            </div>
            </div>
            )}
        </div>
    )
}
