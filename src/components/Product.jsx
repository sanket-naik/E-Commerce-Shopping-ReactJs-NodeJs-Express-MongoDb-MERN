import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {ProductsConsumer} from './Context/ProductsContext'

export default function Product(props) {

    const {_id, title, img, price, inCart}=props.product
    const product=useContext(ProductsConsumer)
    return (
             
            <div className="col-sm-6 col-md-4 col-lg-3 ">
            <div  className="card m-3 shadow p-3 mb-5 bg-white rounded">
                <Link to={`/details/${_id}`}>
                <img className="card-img" src={require(`${img}`)} alt="Vans"/>
                </Link>
                <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <div className="buy d-flex justify-content-between align-items-center">
                    <div className="price text-success"><h5 className="mt-4">{price.toLocaleString()} &#x20b9;</h5></div>
                    <button disabled={inCart?true:false} onClick={()=>product.onClickCart(_id)} className="btn btn-dark mt-3">
                    {inCart?(
                        <span><strike><i className="fas fa-shopping-cart" ></i> In Cart</strike></span>
                        ):(
                            <span><i className="fas fa-cart-plus"></i> Add</span> 
                        )}
                    </button>
                </div>
                </div>
            </div>
            </div>
        
    )
}

Product.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};