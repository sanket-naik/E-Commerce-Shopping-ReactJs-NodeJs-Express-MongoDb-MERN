import React,{useContext} from 'react'
import {ProductsConsumer} from './Context/ProductsContext'

export default function CartItems(props) {

    const{title, company, price, img, _id, total, count}=props.product;
    const product=useContext(ProductsConsumer)

    // const [quantity, setquantity] = useState(1)

    const handleChange=(e)=>{
        if(e.target.value<0){
           return false 
        }
        // setquantity(e.target.value)
        product.onPrice(e.target.value, _id)
    }

    return (
   
            <tr>
                <td className="col-sm-8 col-md-6">
                <div className="media">
                    <span className="thumbnail pull-left mr-4"> <img className="media-object" src={require(`${img}`)} style={{width: 72, height:72}} alt={company}/> </span>
                    <div className="media-body">
                        <h4 className="media-heading">{title}</h4>
                        <h5 className="media-heading"> by {company}</h5>
                        <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                    </div>
                </div></td>
                <td className="col-sm-1 col-md-1" style={{textAlign:"center"}}>
                <input type="number" className="form-control" value={count} onChange={handleChange}/>
                </td>
                <td className="col-sm-1 col-md-1 text-center"><strong>&#x20b9;{price.toLocaleString()} </strong></td>
                <td className="col-sm-1 col-md-1 text-center"><strong>&#x20b9;{(total).toLocaleString()}</strong></td>
                <td className="col-sm-1 col-md-1">
                <button type="button" className="btn btn-danger" onClick={()=>product.onRemoveCart(_id)} >
                    <span className="fas fa-trash-alt mr-2" style={{display:'inline' }}/>Remove
                </button></td>
            </tr>
                           
    )
}
