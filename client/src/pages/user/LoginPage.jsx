import { Link } from "react-router-dom";
import "../../styles/user/Login.css";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";


const LoginPage = () => {
  return (
    <div className="container">
        <Header></Header>
      <div className="card-login">
        <div className="content">
          <div className="h2">
            <h2>Welcome to Login Page!</h2>
          </div>
          <p>Use Your Credentials To Access</p>
        </div>

        <div className="row">
          <div className="icons">
            <div className="socialBox" id="fb">
              <i className="fab fa-facebook socialIcon fb"></i>
              <p>Join With Facebook</p>
            </div>
            <div className="socialBox" id="tw">
              <i className="fab fa-twitter socialIcon tw"></i>
              <p>Join With Twitter</p>
            </div>
            <div className="socialBox" id="gl">
              <i className="fab fa-google socialIcon gl"></i>
              <p>Join With Google</p>
            </div>
            <div className="socialBox" id="ig">
              <i className="fab fa-instagram socialIcon ig"></i>
              <p>Join With Instagram</p>
            </div>
          </div>
          <div className="verticalLine">
            <div className="circle">
              <p>or</p>
            </div>
          </div>
          <div className="form">
            <form>
              <input type="email" placeholder="Enter your Email" name="email" />
              <input
                type="password"
                placeholder="Enter your Password"
                name="password"
              />


              <div className="terms">
                <input type="checkbox" id="terms" name="terms" />
                <label htmlFor="terms">Remember me</label>
              </div>

              <button type="submit">LOGIN</button>
              <div className="resetHere">
                <p>
                  Forgot your password ?
                  <Link to="/resetPassword" id="link">
                    Reset Here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="card-bottom">
        <div className="content">
          <p>
            Don't Have Any Account?
            <Link to="/register" id="link">
              Register Here
            </Link>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LoginPage;
