import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Interact++</h3>
          <span className="loginDesc">Connect with Friends now!</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder=" Enter your email" className="loginInput" />
            <input type="text" placeholder="Password" className="loginInput" />
            <button className="loginButton">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
