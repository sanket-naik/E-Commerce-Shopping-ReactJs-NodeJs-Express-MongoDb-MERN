import React, {useContext,useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {ProductsConsumer} from './Context/ProductsContext'
import './css/Navbar.css'

export default function Navbar() {

    const products=useContext(ProductsConsumer)
    
    const [count, setcount] = useState(0)

    // const [productList, setproductList] = useState([])

    useEffect(() =>  {
        // axios.get("http://localhost:5000/api/products")
        //     .then((res)=>{
        //         const crt=res.data.filter((e)=>e.inCart===true)
        //         setcount(crt.length);
        //     })
        //     .catch((err)=>console.log(err.data))
        setcount(products.DetailProduct.count)
    },[products.DetailProduct.count])

    return (
        <nav className="navbar navbar-icon-top navbar-expand navbar-dark bg-dark">
            <span className="navbar-brand">
               <img src='logo.png' alt="Logo" style={{width:50}}/>
            </span>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                    <Link to="/" className="nav-link" >
                    <i className="fa fa-home"></i>
                    Home
                    </Link>
                   
                </li>

                <li className="nav-item">
                <Link to="/add" className="nav-link" >
                    <i className="fa fa-plus-circle">
                    </i>
                    Add
                </Link>
                </li>

                {/* <li className="nav-item">
                <Link to="/about" className="nav-link" >
                    <i className="fa fa-info-circle">
                    </i>
                    About
                </Link>
                </li> */}

                <li className="nav-item">
                <Link to="/login" className="nav-link" >
                    <i className="fa fa-sign-in-alt">
                    </i>
                    Login
                </Link>
                </li>
                
                </ul>
                <ul className="navbar-nav ">
                
                <li className="nav-item active">
                    <Link to="/cart" className="nav-link mr-1 ml-1" >
                        <i className="fa fa-cart-arrow-down">
                            <span className="badge badge-success">{count}</span>
                        </i>
                        Cart
                    </Link>
                </li>
                </ul>
            </div>
            </nav>
    )
}
