import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/user/LoginPage";
import RegisterPage from "./pages/user/RegisterPage";
import ResetPassword from "./pages/user/ResetPassword";
import AddCategory from "./components/admin/AddCategory";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					{/* userpanel */}
					<Route path='/login' element={<LoginPage></LoginPage>}></Route>
					<Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
					<Route path='/resetPassword' element={<ResetPassword></ResetPassword>}></Route>

					{/* adminpanel */}
					<Route path='/addcategory' element={<AddCategory></AddCategory>}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
