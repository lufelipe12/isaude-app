// import { Redirect, Route as ReactDOMRoute} from 'react-router-dom'

// import { useUser } from '../providers/user'

// const Route = ({ isPrivate = false, component: Component, ...rest}) => {
//     const { user } = useUser()

//     return (
//         <ReactDOMRoute
//             {...rest}
//             render={() => {
//                 // return isPrivate === !!user.token 
//                 // ? <Component /> 
//                 // : <Redirect to={isPrivate ? "/login" : "/dashboard"}/>
//                 return isPrivate === !!user.token 
//                 ? <Component /> 
//                 : <Redirect to={isPrivate ? "/login" : "/dashboard"}/>
//             }}
//         />
//     )
// }

// export default Route