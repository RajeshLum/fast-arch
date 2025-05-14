import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { connect, useDispatch } from 'react-redux';

import {
    loadingToggleAction,
    signupAction,
} from '../../store/actions/AuthActions';

// image

import logo2 from "../../assets/images/logo-full-white.png";
import login from "../../assets/images/reg-bg.jpg";

function Register(props) {
	let year = new Date().getFullYear();
    const [email, setEmail] = useState('');
    let errorsObj = { email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
	const nav = useNavigate();
    function onSignUp(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (email === '') {
            errorObj.email = 'Email is Required';
			error = true;
			swal('Oops', errorObj.email, "error");
        }

        if (password === '') {
            errorObj.password = 'Password is Required';
			error = true;
			swal('Oops', errorObj.password, "error");
        }
        setErrors(errorObj);

        if (error) return;
        dispatch(loadingToggleAction(true));

        dispatch(signupAction(email, password, nav));
    }
	return (
		<div className="login-wrapper">
            
			<div className="login-aside-left" style={{backgroundImage:"url("+ login +")", }}>
			
			</div>
			
			<div className="login-aside-right">	
                <div className="row justify-content-center h-100 align-items-center">
						<div className="col-md-6">
							<div className="authincation-content">
								<div className="row no-gutters">
									
									<div className="col-xl-12">
										<div className="auth-form">											
											<div className="mb-3">
												<h2 className=" text-center text-black">Sign up</h2>
											</div>	
											<h4 className="text-center mb-5">Enter your details to create your account</h4>
											{props.errorMessage && (
                                                <div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
                                                    {props.errorMessage}
                                                </div>
                                            )}
                                            {props.successMessage && (
                                                <div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
                                                    {props.successMessage}
                                                </div>
                                            )}
											<form onSubmit={onSignUp}>
												<div className="form-group">
													<label className="mb-1 "><strong>Username</strong></label>
													<input type="text" className="form-control" placeholder="username"/>
												</div>
												<div className="form-group">
													<label className="mb-1 "> <strong>Email</strong></label>
													<input type="email" className="form-control"
														value={email}
														onChange={(e) => setEmail(e.target.value)}
													/>
												</div>
												{errors.email && <div className="text-danger">{errors.email}</div>}
												<div className="form-group">
													<label className="mb-1 "><strong>Password</strong></label>
													<input type="password" className="form-control"
														value={password}
														onChange={(e) =>
															setPassword(e.target.value)
														}
													/>
												</div>
												{errors.password && <div className="text-danger">{errors.password}</div>}
												<div className="text-center mt-4">
													<button type="submit" className="btn btn-primary btn-block">
													  Sign up
													</button>
												</div>
											</form>
											<div className="new-account mt-3">
												<p className=""> Already have an account?{" "} <Link className="text-primary" to="/login">Sign in</Link></p>
												
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

export default connect(mapStateToProps)(Register);

