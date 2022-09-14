import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Login.css";
function Login() {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
    phonenumber: "",
    email: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
  };

  const title = useRef(null);
  useEffect(() => {
    const typed = new Typed(title.current, {
      strings: ["Login", "typed.js", "and", "tilt.js"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 10,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="">
      <div className="wrapper_login">
        <b>
          this is &nbsp;
          <span style={{ width: "100%" }} ref={title}></span>
        </b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="login_box">
          <form onSubmit={handleLogin}>
            <div className="user_box">
              <input
                value={inputValue.username}
                onChange={(e) =>
                  setInputValue({ ...inputValue, username: e.target.value })
                }
                type="text"
                required
              />
              <label>Username</label>
            </div>
            <div className="user_box">
              <input
                value={inputValue.password}
                onChange={(e) =>
                  setInputValue({ ...inputValue, password: e.target.value })
                }
                type="password"
                required
              />
              <label>Password</label>
            </div>
            <div className="user_box">
              <input
                value={inputValue.phonenumber}
                onChange={(e) =>
                  setInputValue({ ...inputValue, phonenumber: e.target.value })
                }
                className="ligin_number"
                type="text"
                required
              />
              <label>Phone number</label>
            </div>
            <div className="user_box">
              <input
                value={inputValue.email}
                onChange={(e) =>
                  setInputValue({ ...inputValue, email: e.target.value })
                }
                className="ligin_number"
                type="text"
                required={true}
              />
              <label>Email</label>
            </div>
            <button
              className="ligin_btn"
              onClick={() => console.log(inputValue)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
