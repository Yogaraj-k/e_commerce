import { Link } from "react-router-dom";
import "../../styles/user/ResetPassword.css";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";



const ResetPassword = () => {
  return (
    <div className="container">
     <Header></Header>
      <div className="card-resetPassword">
        <div className="content">
          <div className="h2">
            <h2>Worried?</h2>
          </div>
          <p id="p">No Problem! Just Follow The Simple Way </p>
        </div>

        <div className="form-changePassword">
          <form>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="password"
            />

            <button type="submit">GET RESET LINK</button>
          </form>
        </div>
      </div>
      
      <div className="card-changePassword-bottom">
        <div className="content">
          <p>
            Go Back To
            <Link to="/login" id="link">
              Login Here
            </Link>
          </p>
        </div>
      </div>

     <Footer></Footer>
      <Link to="/resetPassword">Reset Password</Link>
    </div>
  );
};

export default ResetPassword;
