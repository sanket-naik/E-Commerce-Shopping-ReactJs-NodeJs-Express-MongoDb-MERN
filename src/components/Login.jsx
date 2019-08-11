import React from 'react'

export default function Login() {
    return (
        <div>
            <section>
                <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                    <div className="row">
                        <div className="col text-center">
                        <h1>Register</h1>
                        <p className="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col mt-4">
                        <input type="text" className="form-control" placeholder="Company Name"/>
                        </div>
                    </div>
                    <div className="row align-items-center mt-4">
                        <div className="col">
                        <input type="email" className="form-control" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="row align-items-center mt-4">
                        <div className="col">
                        <input type="password" className="form-control" placeholder="Password"/>
                        </div>
                        <div className="col">
                        <input type="password" className="form-control" placeholder="Confirm Password"/>
                        </div>
                    </div>
                    <div className="row justify-content-start mt-4">
                        <div className="col">
                        <div className="form-check">
                            <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"/>
                            I Read and Accept <a href="https://www.froala.com">Terms and Conditions</a>
                            </label>
                        </div>

                        <button className="btn btn-primary mt-4">Submit</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}
