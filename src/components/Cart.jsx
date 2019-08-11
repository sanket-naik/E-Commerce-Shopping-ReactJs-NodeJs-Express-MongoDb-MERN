import React,{useContext, useState, useEffect} from 'react'
import Title from './Title'
import {ProductsConsumer} from './Context/ProductsContext'
import CartItems from './CartItems'
import {Link} from 'react-router-dom'
import './css/Cart.css'

export default function Cart() {

    const product= useContext(ProductsConsumer)
    const [ProductList, setproductList] = useState([])
    let subTotal=0
    let cartItemCount=0

    useEffect(() =>  {
        // axios.get("http://localhost:5000/api/products")
        //     .then((res)=>{
        //         setproductList(res.data)
        //     })
        //     .catch((err)=>console.log(err.data))
        setproductList(product.ProductList)
    },[product.ProductList])


    return (
        <div className="py-4">
            <Title title="Products Cart"/>
                    <div className=" row table-responsive d-flex justify-content-center">
                        <div className="col-sm-12 col-md-10 col-md-offset-1 ">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th className="text-center">Price</th>
                                        <th className="text-center">Total</th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                            ProductList.map((product)=>{
                                                if(product.inCart===true){
                                                return <CartItems key={product._id} product={product}/>
                                                }
                                                return null
                                            })
                                        }
                                    
                                
                                    </tbody>
                            </table>
                        
                                    
                                
                        
                        </div>
                    </div>

                    <div className="container">
                    <hr className="pl-10"/>
                        <div className="d-flex flex-row-reverse">
                        {
                            ProductList.forEach(product=>{
                                if(product.inCart===true){
                                    subTotal+=product.total
                                }
                            })
                        }
                        <div className="p-2"><h5><strong>&#x20b9;{subTotal.toLocaleString()}</strong></h5></div>
                        <div className="p-2"><h5>Subtotal</h5></div>
                        </div>          
                            <hr className="pl-10"/>
                        <div className="d-flex flex-row-reverse">
                            {  
                                    ProductList.forEach(product=>{
                                    if(product.inCart===true && product.count>0){
                                        cartItemCount+=1;
                                    }
                                })
                            }
                        <div className="p-2"><h5><strong> &#x20b9;{(cartItemCount*150).toLocaleString()}</strong></h5></div>
                        <div className="p-2"><h5>Estimated shipping</h5></div>
                        </div>

                        <hr className="pl-10"/>
                        <div className="d-flex flex-row-reverse">
                        <div className="p-2"><h3><strong>&#x20b9;{(subTotal+cartItemCount*100).toLocaleString()}</strong></h3></div>
                        <div className="p-2"><h3 className="mr-4">Total</h3></div>
                        </div>

                        <hr className="pl-10"/>
                        <div className="d-flex flex-row-reverse">

                        <div className="p-2">
                            <button type="button" className="btn btn-success">
                                Checkout<span className="fas fa-play ml-2"  style={{display:'inline' }}></span>
                            </button>
                        </div>

                        <div className="p-2">
                            <Link to="/">
                                <button type="button" className="btn btn-info">
                                    <span className="fas fa-shopping-basket" style={{display:'inline' }}></span> Continue Shopping
                                </button>      
                            </Link> 
                        </div>

                        </div>
                    </div>
            </div>
    )
}
