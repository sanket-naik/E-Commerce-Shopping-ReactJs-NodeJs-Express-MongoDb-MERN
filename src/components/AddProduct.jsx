import React, {useState} from 'react'
import axios from 'axios';

export default function AddProduct() {

    const [ProductForm, setProductForm] = useState(
        {
            title: "",
            img: "./img/product-1.png",
            price: "",
            company: "",
            info: "",
        }
    )
    
    const{title, img, price, company, info}=ProductForm
    
    const handleChange=(e)=>{
        const{name, value}=e.target;
        setProductForm({...ProductForm,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('https://e-commerce-endpoints.herokuapp.com/api/products/add',ProductForm)
            .then((res)=>{
                console.log(res)
                setProductForm( {
                    title: "",
                    img: "./img/product-1.png",
                    price: "",
                    company: "",
                    info: "",
              })
            window.location='/';
        })
            .catch((err)=>console.log(err))
        
    }

    return (
        <div>
              <section>
                <div className='m-3'>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                    <div className="row">
                        <div className="col text-center">
                        <h1>Add New Product</h1>
                        <p className="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="product">Product Title</label>
                        <input type="text" name="title" value={title} onChange={handleChange} className="form-control" id="product" placeholder="Title of the product"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input type="text"  className="form-control" id="image" name="img" value={img} onChange={handleChange}/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" value={price} onChange={handleChange} className="form-control" id="price" placeholder="Price"/>
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="company">Company</label>
                        <input type="text" name="company" value={company} onChange={handleChange} className="form-control" id="company" placeholder="Company name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="info">Info</label>
                        <textarea name="info" value={info} onChange={handleChange}  className="form-control" id="info" placeholder="Info about the product"/>
                    </div>
                    <div className="row justify-content-start mt-4">
                        <div className="col">
                        <div className="form-check">
                            <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"/>
                            I Read and Accept <a href="#">Terms and Conditions</a>
                            </label>
                        </div>

                        <button className="btn btn-primary mt-4" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}
