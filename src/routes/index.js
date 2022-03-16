import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/dashboard' component={Dashboard} isPrivate/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register} />
        </Switch>
    )
}

export default Routes