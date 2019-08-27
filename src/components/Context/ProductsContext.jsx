import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios';

export const ProductsConsumer = createContext()

export function ProductsProvider(props) {

    const [ProductList, setProductList] = useState([])
    const [cartItemCount, setCartItemCount] = useState({count:0})
    const [Loading, setLoading] = useState(true)


    useEffect(() =>  {
        fatchApi()
    },[])

    function fatchApi() {
        //GETTING THE API FROM NODE
        axios.get("https://e-commerce-endpoints.herokuapp.com/api/products")
            .then((res)=>{
                setProductList(res.data)
                // GETTING THE COUNT OF THE CART
                const count=res.data.filter((e)=>e.inCart===true)
                setCartItemCount({count:count.length})
                setLoading(false)
            })
            .catch((err)=>console.log(err.data))
 
    }
    
    const totalPrice=(quentity,id)=>{

        // quentity===""?quentity="":quentity=Math.round(quentity)
        // const productUpdate={total:true}

        // axios.patch(`http://localhost:5000/api/products/update/${id}`,productUpdate)
        //     .then((res)=>{
        //         setCartItemCount({count:cartItemCount.count+1}) 
                //UPDATING STATE PRODUCT
                // const products=[...ProductList]
                // products.map(product=>{
                //     if(product._id===id){
                //         return [product, product.total=product.price*quentity, product.count=quentity]
                //     }
                //     return product
                // })
    
            //      setProductList(products)
            // })
            // .catch((err)=>console.log(err.data))


        quentity===""?quentity="":quentity=Math.round(quentity)
        const products=[...ProductList];
        products.map(product=>{
            if(product._id===id){
                return [product, product.total=product.price*quentity, product.count=quentity]
            }
            return product;
        })
        setProductList(products);
    }

    const addToCart=(id)=>{

        const inCart={inCart:true}

        axios.patch(`https://e-commerce-endpoints.herokuapp.com/api/products/update/${id}`,inCart)
            .then((res)=>{
                setCartItemCount({count:cartItemCount.count+1}) 
                //UPDATING STATE PRODUCT
                const products=[...ProductList]
                products.map(product=>{
                    if(product._id===id){
                        return [product, product.inCart=true]
                    }
                    return product
                })
    
                 setProductList(products)
            })
            .catch((err)=>console.log(err.data))

           
      
    }

    const removeFromCart=(id)=>{

        const inCart={inCart:false}

        axios.patch(`https://e-commerce-endpoints.herokuapp.com/api/products/update/${id}`,inCart)
            .then((res)=>{
                setCartItemCount({count:cartItemCount.count-1}) 
                //UPDATING STATE PRODUCT
                const products=[...ProductList]
                products.map(product=>{
                    if(product._id===id){
                        return [product, product.inCart=false]
                    }
                    return product
                })
    
                 setProductList(products)
            })
            .catch((err)=>console.log(err.data))
    }
    

    return (
        <ProductsConsumer.Provider value={{ProductList, 
                                           Loading,
                                           DetailProduct: cartItemCount, 
                                           onRemoveCart:removeFromCart, 
                                           onClickCart:addToCart,
                                           onPrice:totalPrice,
                                           }}>
            {props.children}
        </ProductsConsumer.Provider>
    )
}

