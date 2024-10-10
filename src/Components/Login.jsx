import { IoDiamond } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoIosKey } from "react-icons/io";
function Login() {
  return (
    <div className="login">
      <LogoName />
      <Form />
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

function Form() {
  return (
    <div>
      <form>
        <div className="form-flex">
          <CiMail style={{ color: "white", fontSize: "25px" }} />
          <input type="email" id="email" placeholder="Enter your Mail" />
        </div>
        <div className="key">
          <IoIosKey style={{ color: "white", fontSize: "25px" }} />
          <input type="text" id="password" placeholder="Enter your password" />
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
