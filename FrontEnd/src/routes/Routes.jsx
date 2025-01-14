import Home from "../Pages/Home/Home";
import Detail from "../Pages/Detail/Detail";
import Add from "../Pages/Add/Add";
import Basket from "../Pages/Basket/Basket";
import UserRoot from "../Pages/UserRoot";



const Routes=[
    {
        path:"/",
        element:<UserRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/add",
                element:<Add/>
            },
            {
                path:"/basket",
                element:<Basket/>
            },
            {
                path:"/:id",
                element:<Detail/>
            }
        ]
    }
]
export default Routes