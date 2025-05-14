import React  from 'react';
import {connect, useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { PiSignOutDuotone } from "react-icons/pi";

import { Logout } from '../../../store/actions/AuthActions';
import { isAuthenticated } from '../../../store/selectors/AuthSelectors';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}


function LogoutPage(){
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onLogout() {
       dispatch(Logout(navigate));        
    }
    return(
        <>
            <button  className="dropdown-item ai-icon" onClick={onLogout}>
                <span width={18} height={18}><PiSignOutDuotone /></span>
                <span className="ms-2" >Sign Out </span>
            </button>
        </>
    )
} 
const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state),
    };
};

export default withRouter(connect(mapStateToProps)(LogoutPage));