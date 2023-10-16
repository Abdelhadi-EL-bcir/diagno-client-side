import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    const [error  , setError] = useState({
        color : '' , 
        msg : ''
    });

    const handleRegister = () => {
        const apiUrl = 'https://your-api-endpoint.com/login';
        
        if(password !== confirmPassword){
            setError({
                color : 'red' , 
                msg : 'confirm your password !!!'
            });
        }else{
            setError({
                color : 'green' , 
                msg : 'Done!'
            });
            axios.post(apiUrl, {
                username: username,
                email : email , 
                password: password
            })
                .then(response => {
                    console.log('Register successful', response.data);
                })
                .catch(error => {
                    console.error('Register failed', error);
                });
        }
        
    };

    return (
        <section class=" mt-5">
            <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-6 col-lg-6 col-xl-4 offset-xl-1 p-3" style={{borderBotttom:"1px"  ,borderRadius:"12px"}}>
                        <form>
                            <div class="d-flex flex-row align-items-center justify-content-center ">
                                <h1 style={{color : "#192655"}} class=" mb-4 me-3">
                                    Sign Up
                                </h1>
                            </div>
                            <div class="form-outline mb-4">
                                <input  onChange={(e) => setUsername(e.target.value)} style={{ borderRadius: "24px" , backgroundColor:"#DDE6ED"}} type="text" id="username" class="form-control "
                                    placeholder="Username" />
                            </div>

                            <div class="form-outline mb-4">
                                <input onChange={(e) => setEmail(e.target.value)} style={{ borderRadius: "24px" , backgroundColor:"#DDE6ED" }} type="email" id="email" class="form-control form-control-lg"
                                    placeholder="Email" />
                            </div>

                            <div class="form-outline mb-3">
                                <input onChange={(e) => setPassword(e.target.value)} style={{ borderRadius: "24px" , backgroundColor:"#DDE6ED" }} type="password" id="password" class="form-control  form-control-lg"
                                    placeholder="Password" />
                            </div>

                            <div class="form-outline mb-3">
                                <input onChange={(e) => setConfirmPassword(e.target.value)} style={{ borderRadius: "24px"  , backgroundColor:"#DDE6ED"}} type="password" id="ConfirmPassword" class="form-control form-control-lg"
                                    placeholder="Confirm Password" />
                            </div>

                            <div class="d-flex justify-content-between align-items-center">
                                <div class="form-check mb-0">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label class="form-check-label" for="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                {error && <span style={{color:error.color}}>{error.msg}</span>}
                            </div>

                            <div class="text-center align-items-center mt-4 pt-2">
                                <button onClick={handleRegister} type="button" class="btn form-control btn-lg"
                                    style={{backgroundColor:"#192655" , color:"#ffffff" ,paddingLeft: "2.5rem", paddingRight: "2.5rem", borderRadius: "24px" }}>Sign Up</button>
                                <p class="text-dark small  mt-2 pt-1 mb-0">already have an account! <Link 
                                    className="text-dark" to='/'>sign in</Link></p>
                            </div>

                        </form>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            class="img-fluid" alt="testdqsd" />
                    </div>
                </div>
            </div>
        </section>)
}

export default Register;
