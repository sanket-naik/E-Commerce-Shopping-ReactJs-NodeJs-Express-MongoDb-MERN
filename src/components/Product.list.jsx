import React, {useState, useEffect, useContext} from 'react'
import Product from './Product'
import SearchBar from './SearchBar'
import Pagination from './Pagination'
import Loading from './Loading'
import {ProductsConsumer} from './Context/ProductsContext'

export default function ProductList() {

    const products= useContext(ProductsConsumer)
    const [ProductsList, setProductsList] = useState([])
    const [loading, setloading] = useState(true)

    const [FilterString, setFilterString] = useState("")
    const [FilterItems, setFilterItems] = useState([])
    

    useEffect(() =>  {
                setProductsList(products.ProductList)
                setFilterItems(products.ProductList)
                setloading(products.Loading)
    },[products.ProductList, products.Loading])


    const HandleFilter=(e)=>{
        setFilterString(e.target.value)
        let val=e.target.value
        const filteredData = ProductsList.filter(element => {
        return element.title.toLowerCase().trim().includes(val.toLowerCase().trim());
        })
        setFilterItems(filteredData)
    }
    
    return (
           <React.Fragment>
                <div>
                    <SearchBar ItemValue={FilterString} onChangeFilter={HandleFilter}/>
                    {loading?<div style={{marginTop:'15vh'}}><Loading/></div>:(
                    <div>
                            <div className="row m-1">
                            {
                                FilterItems.map((product)=>(
                                    <Product key={product._id} product={product}/>
                                ))
                            }
                        </div>
                    <Pagination/>
                    </div>
                  
                    )}
                </div>
           </React.Fragment>
    )
}
