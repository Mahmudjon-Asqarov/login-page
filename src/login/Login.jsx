import React, { useState } from 'react'
import './Login.css'
function Login() {
    const [inputValue, setInputValue] = useState({
        username: "",
        password: "",
        phonenumber: "",
        email: ""
    })
    const handleLogin = (e) => {
        e.preventDefault()
    }
    return (
        <div className="login_page">
            <div className="wrapper_login">
                <h2>Login</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="login_box">
                    <form onSubmit={handleLogin}>
                        <div className="user_box">
                            <input value={inputValue.username} onChange={(e) => setInputValue({ ...inputValue, username: e.target.value })} type="text" required />
                            <label>Username</label>
                        </div>
                        <div className="user_box">
                            <input value={inputValue.password} onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })} type="password" required />
                            <label>Password</label>
                        </div>
                        <div className="user_box">
                            <input value={inputValue.phonenumber} onChange={(e) => setInputValue({ ...inputValue, phonenumber: e.target.value })} className="ligin_number" type="text" required />
                            <label>Phone number</label>
                        </div>
                        <div className="user_box">
                            <input value={inputValue.email} onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })} className="ligin_number" type="text" required={true} />
                            <label>Email</label>
                        </div>
                        <button className='ligin_btn' onClick={() => console.log(inputValue)} >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login