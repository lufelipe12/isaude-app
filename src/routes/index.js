import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path='/dashboard'>
                <Dashboard />
            </Route>
            <Route exact path='/login'>
                <Login/>
            </Route>
            <Route exact path='/register'>
                <Register/>
            </Route>
        </Switch>
    )
}

export default Routes