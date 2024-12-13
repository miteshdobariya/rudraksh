import axios from "axios";
import React, { useEffect, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Header from "./Header";
import { useNavigate } from "react-router-dom";





const Signup = () => {

    const username = useRef()
    const email = useRef()
    const password = useRef()
    const mobile=useRef()
    const Navigate=useNavigate();

    const register = (e) => {
        e.preventDefault()

        var obj = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
            // mobile:mobile.current.value,
        } 
        toast();


        axios.post('http://localhost:4545/add',obj)
        .then(function (response) {
          // handle success
          console.log(response);
          if(response.data.status == "done")
          {
            toast("Success Register");
            localStorage.setItem("email",obj.email);
            Navigate("/login");
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          toast("error");
        })
    }




    return (
        <>
                <ToastContainer />
            <div className="signup-main">
                <div className="container">
                    <h1>Sign Up</h1>
                    <form onSubmit={register}>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" ref={username} />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" ref={email} />

                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" ref={password} />

                        {/* <label htmlFor="mobile">Mobile:</label>
                        <input type="text" id="mobile" name="mobile" ref={mobile} /> */}


                        <button className="sign-button" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Signup;




