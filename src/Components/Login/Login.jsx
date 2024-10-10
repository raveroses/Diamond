import { IoDiamond } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoIosKey } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const userdetail = {
    email: "",
    password: "",
  };
  const [input, setInput] = useState(userdetail);
  const navigate = useNavigate();
  const handleSubmission = (e) => {
    e.preventDefault();
    if (input.email.trim() === "" || input.password.trim() === "") {
      alert("Please fill out all fields");
      return;
    }

    if (input.email && input.password) {
      navigate("/home");
    }
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <div className="login">
      <LogoName />
      <Form
        input={input}
        handleOnchange={handleOnchange}
        handleSubmission={handleSubmission}
      />
    </div>
  );
}

function LogoName() {
  return (
    <div>
      <div className="logo">
        <IoDiamond className="diamond" />
        <h2>Diamond</h2>
      </div>

      <div className="login-here">
        <h5>LOGIN HERE</h5>
      </div>
    </div>
  );
}

function Form({ input, handleOnchange, handleSubmission }) {
  return (
    <div>
      <form onSubmit={handleSubmission}>
        <div className="form-flex">
          <CiMail style={{ color: "white", fontSize: "25px" }} />
          <input
            type="email"
            id="email"
            name="email"
            value={input.email}
            onChange={handleOnchange}
            placeholder="Enter your Mail"
          />
        </div>
        <div className="key">
          <IoIosKey style={{ color: "white", fontSize: "25px" }} />
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleOnchange}
            value={input.password}
            placeholder="Enter your password"
          />
        </div>
        <div className="submit-login">
          <button type="submit">Login</button>
        </div>
      </form>

      <div className="last-inside-form">
        <span>
          <em>
            Don't have an account? <a href="">Sign Up</a>
          </em>
        </span>
      </div>
    </div>
  );
}

export default Login;
