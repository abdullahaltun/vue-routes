import Home from "./components/Home"
import User from "./components/user/User"
import UserStart from "./components/user/UserStart"
import UserDetail from "./components/user/UserDetail"
import UserEdit from "./components/user/UserEdit"
import Header from "./components/Header"

export const routes =[
    {
        path :"/", name : 'anasayfa', components : {
            default : Home,
            "header-top" : Header
        }
    },
    {
        path :"/user",
        components: {
            default : User,
            "header-bottom" : Header
        },
        children : [
            { path :"", component : UserStart },
            { path :":id", component : UserDetail},
            { path :":id/edit", component : UserEdit, name:"userEdit" }
        ]
    },
    { path : "/redirect", redirect : "/user" },
    { path : "*" , redirect : "/" }

]