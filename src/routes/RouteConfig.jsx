import {Routes , Route} from 'react-router-dom';
import UserSignUp from '../pages/Auth/Signup/UserSignUp';
import PageNotFound from '../pages/Common/PageNotFound';
import HomePage from '../pages/Homepage/Homepage';
import Layout from '../pages/Layout/Outlet/Layout';
import { ALL, BASE, HOME, USER_SIGNUP } from './CONSTANTS';
const RouterConfig = () =>{
    return(
        <Routes>
            <Route path={BASE} element={<Layout />}>
                <Route path={HOME} element={<HomePage />} /> 
                <Route path={USER_SIGNUP} element={< UserSignUp/>}/>
                <Route path={ALL} element={<PageNotFound />}/>
                
            </Route>
        </Routes>
    )
}
export default RouterConfig;