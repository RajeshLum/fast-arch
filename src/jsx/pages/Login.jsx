import React,{ useState } from "react";
import { connect, useDispatch } from 'react-redux';
import { Link , useNavigate} from "react-router-dom";
import {
    loadingToggleAction,
    loginAction,
} from '../../store/actions/AuthActions';
// image
import logo2 from "../../assets/images/logo-full-white.png";
import logoarc from "../../assets/images/auth-side-bg.png";
import login from "../../assets/images/login-bg.jpg";

function Login(props) {
	let year = new Date().getFullYear();
	const [email, setEmail] = useState('demo@demo.com');
    let errorsObj = { email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('123456');

    const dispatch = useDispatch();
	const nav = useNavigate();
    function onLogin(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (email === '') {
            errorObj.email = 'Email is Required';
            error = true;
        }
        if (password === '') {
            errorObj.password = 'Password is Required';
            error = true;
        }
        setErrors(errorObj);
        if (error) {
			return;
		}        
		dispatch(loadingToggleAction(true));
        dispatch(loginAction(email, password, nav));
    }

  return (
		<div className="login-wrapper">
			<div className="login-aside-left" style={{backgroundImage:"url("+ login +")", }}>
				
				</div>
			<div className="login-aside-right">
				<div className="row m-0 justify-content-center h-100 align-items-center">
				  <div className="col-xl-6 col-xxl-8">
					<div className="authincation-content">
					  <div className="row no-gutters">
						<div className="col-xl-12">
						  <div className="auth-form">
							<div className=" mb-3">
							  <h2 className="text-primary" style={{color: "white"}}>Welcome back!</h2>
							</div>
							<h4 className=" mb-4 ">Please enter your credentials to sign in!</h4>
                            {props.errorMessage && (
                                <div className='text-danger'>
                                    {props.errorMessage}
                                </div>
                            )}
                            {props.successMessage && (
                                <div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
                                    {props.successMessage}
                                </div>
                            )}
							<form onSubmit={onLogin}>
                                <div className="form-group">
									<label className="mb-2 ">
									  <strong>Email</strong>
									</label>
									<input type="email" className="form-control"
									  value={email}
									   onChange={(e) => setEmail(e.target.value)}
                                       //defaultValue="abcd@gmail.com"
									/>
								  {errors.email && <div className="text-danger fs-12">{errors.email}</div>}
								</div>
								<div className="form-group">
									<label className="mb-2 "><strong>Password</strong></label>
									<input
									  type="password"
									  className="form-control"
									  value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
									/>
									{errors.password && <div className="text-danger fs-12">{errors.password}</div>}
								</div>
							  <div className="form-row d-flex justify-content-between mt-4 mb-2">
								<div className="form-group">
								  <div className="form-check custom-checkbox ms-1 ">
									<input
									  type="checkbox"
									  className="form-check-input"
									  id="basic_checkbox_1"
									/>
									<label
									  className="form-check-label"
									  htmlFor="basic_checkbox_1"
									>
									  Remember my preference
									</label>
								  </div>
								</div>
								
							  </div>
							  <div className="text-center">
								<button
								  type="submit"
								  className="btn btn-primary btn-block"
								>
								  Sign In
								</button>
							  </div>
							</form>
							<div className="new-account mt-3">
							  <p className="">
								Don't have an account?{" "}
								<Link className="text-primary" to="/page-register">
								  Sign up
								</Link>
							  </p>
							</div>
						  </div>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			</div>
		</div>
  );
};

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};
export default connect(mapStateToProps)(Login);
