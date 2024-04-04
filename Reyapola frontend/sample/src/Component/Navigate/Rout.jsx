import Home from "../../Pages/Home/Home.jsx";
import About from "../../Pages/About/About.jsx";
import Contact from "../../Pages/Contact/Contact.jsx";

const rout = [
    {
        name:"Home",
        component: <Home/>,
        path:'/home',
        key:'home'

    },
    {
        name:"About",
        component: <About/>,
        path:'/abou',
        key:'abote'

    },
    {
        name:"Contact",
        component: <Contact/>,
        path:'/contact',
        key:'contact'

    },
]
export default rout;