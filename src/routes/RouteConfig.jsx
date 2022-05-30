import {Routes , Route} from 'react-router-dom';
import UserSignUp from 'pages/Auth/Signup/UserSignUp';
import PageNotFound from 'pages/Common/PageNotFound';
import HomePage from 'pages/Homepage/Homepage';
import Layout from 'pages/Layout/Outlet/Layout';
import { ALL, BASE, HOME, USER_SIGNUP , SELLER_SIGNUP , GENRE , LOGIN } from './CONSTANTS';
import SellerSignUp from 'pages/Auth/Signup/SellerSignup';
import Genre from 'pages/Genres/Genre';
import Login from 'pages/Auth/Login/Login';
const RouterConfig = () =>{
    return(
        <Routes>
            <Route path={BASE} element={<Layout />}>
                <Route path={HOME} element={<HomePage />} /> 
                <Route path={USER_SIGNUP} element={< UserSignUp/>}/>
                <Route path={SELLER_SIGNUP} element={< SellerSignUp/>}/>
                <Route path={LOGIN} element={< Login/>}/>
                <Route path={GENRE} element={< Genre/>}/>
                <Route path={ALL} element={<PageNotFound />}/>
                
            </Route>
        </Routes>
    )
}
export default RouterConfig;