import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { request } from '../utils/request';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = () => {
        request("/authentifier" , "GET" , {
            nom: username,     
            password: password 
        }).then(response =>{
            console.log(response.data);
            alert(response);
            if(response.data === undefined){
                alert("user not found");
            }else{
                alert(response.data);
                navigate('/test');
            }
        }).catch(error =>{
            console.log(error);
            alert(error.message);
        })
    };

    return (
        <section class="mt-5">
            <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-6 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <div class="d-flex flex-row align-items-center justify-content-center ">
                                <h1 class=" mb-4 me-3 text-primary">
                                    Welcome Back
                                </h1>
                            </div>
                            <div class="form-outline mb-4">
                                <input onChange={(e) => setUsername(e.target.value)} style={{ borderRadius: "24px" }} type="text" id="form3Example3" class="form-control form-control-lg"
                                    placeholder="Username" />
                            </div>

                            <div class="form-outline mb-3">
                                <input onChange={(e) => setPassword(e.target.value)} style={{ borderRadius: "24px" }} type="password" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Enter password" />
                            </div>

                            <div class="d-flex justify-content-between align-items-center">
                                <div class="form-check mb-0">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label class="form-check-label" for="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" class="text-body">Forgot password?</a>
                            </div>

                            <div class="text-center align-items-center mt-4 pt-2">
                                <button onClick={handleLogin} type="button" class="btn form-control  btn-primary btn-lg"
                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", borderRadius: "24px" }}>Login</button>
                                <p class="text-primary small  mt-2 pt-1 mb-0">Don't have an account? <Link to="/register"
                                    class="text-primary">sign up</Link></p>
                            </div>

                        </form>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            class="img-fluid" alt="testdqsd" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Login;