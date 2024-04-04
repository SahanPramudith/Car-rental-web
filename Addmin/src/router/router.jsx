import post from "../pages/createpost/post.jsx";
import Post from "../pages/createpost/post.jsx";
import View from "../pages/Viwe/View.jsx";
import Update from "../pages/Update/Update.jsx";
import Coustomer from "../pages/Coustomer/Coustomer.jsx";
import PostAddIcon from '@mui/icons-material/PostAdd';
import FeedIcon from '@mui/icons-material/Feed';
import UpdateIcon from '@mui/icons-material/Update';
import ArticleIcon from '@mui/icons-material/Article';
import {Tooltip} from "@mui/material";




const router =[
    {
        name:"Create post",
        path:'/post',
        component:<Post/>,
        key:'post',
        icon:<Tooltip title="Create post" placement="right-end"><PostAddIcon/></Tooltip>
    },
    {
        name:"view Post ",
        path:'/view',
        component:<View/>,
        key:'post',
        icon:<Tooltip title="view Post"><FeedIcon/></Tooltip>
    },
    {
        name:"Update post ",
        path:'/update/:id',
        component:<Update/>,
        icon:<Tooltip title="Update post"><UpdateIcon/></Tooltip>,
        key:'post'
    },

    {
        name:"Coustomer Request ",
        path:'/cous',
        component:<Coustomer/>,
        icon:<Tooltip title="Coustomer Request"><ArticleIcon/></Tooltip>,
        key:'cous'
    },

]
export default router;