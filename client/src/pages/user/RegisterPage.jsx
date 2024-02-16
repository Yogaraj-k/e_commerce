import { Link } from "react-router-dom";
import "../../styles/user/Register.css";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";
const RegisterPage = () => {
	return (
		<div className='container'>
			<Header></Header>
			<div className='card'>
				<div className='content'>
					<div className='h2'>
						<h2>Join Now!</h2>
					</div>
					<p>Setup A New Account In A Minute</p>
				</div>

				<div className='row'>
					<div className='icons'>
						<div className='socialBox' id='fb'>
							<i className='fab fa-facebook socialIcon fb'></i>
							<p>Join With Facebook</p>
						</div>
						<div className='socialBox' id='tw'>
							<i className='fab fa-twitter socialIcon tw'></i>
							<p>Join With Twitter</p>
						</div>
						<div className='socialBox' id='gl'>
							<i className='fab fa-google socialIcon gl'></i>
							<p>Join With Google</p>
						</div>
						<div className='socialBox' id='ig'>
							<i className='fab fa-instagram socialIcon ig'></i>
							<p>Join With Instagram</p>
						</div>
					</div>
					<div className='verticalLine-register'>
						<div className='circle-register'>
							<p>or</p>
						</div>
					</div>
					<div className='form'>
						<form>
							<input type='text' placeholder='Enter your Name' name='name' />

							<input type='email' placeholder='Enter your Email' name='email' />

							<input type='password' placeholder='Enter your Password' name='password' />

							<input type='password' placeholder='Repeat Password' name='repeatPassword' />

							<div className='terms'>
								<input type='checkbox' id='terms' name='terms' />
								<label htmlFor='terms'>
									Accept all the <Link to='/register'>Terms & Conditions</Link>
								</label>
							</div>

							<button type='submit'>Register</button>
						</form>
					</div>
				</div>
			</div>
			<div className='card-bottom'>
				<div className='content'>
					<p>
						Already Have An Account?
						<Link to='/login' id='link'>
							Login Here
						</Link>
					</p>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default RegisterPage;
