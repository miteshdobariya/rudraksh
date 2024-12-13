import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header";

import axios from 'axios';
const Login = () => {
    const Navigate = useNavigate();

    const username = useRef();
    const password = useRef();

    const register = (e) => {
        e.preventDefault();


        var obj = {
            username: username.current.value,
            password: password.current.value,

        }
       
      


    axios
    .get('http://localhost:4545/getuser', { params: { username: obj.username } })
    .then((response) => {
      if (response.data.status === "done") {
        // Store all user details in localStorage
        localStorage.setItem('userDetails', JSON.stringify(response.data.data));
        toast.success("User details fetched successfully!");
      }
    })
    .catch((error) => {
      if (error.response) {
        toast.error(error.response.data.message || "Error fetching user details");
      } else {
        toast.error("Server error. Please try again.");
      }
    });

       axios.post('http://localhost:4545/verify', obj)
            .then(function (response) {
              localStorage.setItem('nameofuser', obj.username);
                localStorage.setItem('loginnn', 'done');
                Navigate("/");
                
            })
            .catch(function (error) {
                // handle error 
                toast(error.response.data.message);
            })

    }




    return (
        <>
            <ToastContainer />
            <div className="login-body">
                <div className="login-container">
                    <h2>Login</h2>
                    <form onSubmit={register}>
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" required ref={username} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required ref={password} />
                        </div>
                        <div className="input-group">
                            <button type="submit">Login</button>
                        </div>
                        <div className="links">

                            <Link to={"/forgot"}>Forgot Password? </Link>
                            <Link to={"/signup"}> signup</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;