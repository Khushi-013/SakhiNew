import React from "react";
import {useRoutes} from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import CommunityGroup from "pages/CommunityGroup";
import MentorsPage from "pages/MentorsPage";
import HomePageOne from "pages/HomePageOne";
import HomePageTwo from "pages/HomePageTwo";
import ResourcesPage from "pages/ResourcesPage";
import HomePageFour from "pages/HomePageFour";

const ProjectRoutes=()=>{
    let element = useRoutes([
        {path:"home", element:<Home/>},
        {path:"*", element:<NotFound/>},
        {
            path:"/",
            element:<LoginPage/>,
        },
        {
            path:"loginpage",
            element:<RegisterPage/>,
        },
        {
            path:"registerpage",
            element:<RegisterPage/>,
        },
        {
            path:"communitygroup",
            element:<CommunityGroup/>,
        },
        {
            path:"mentorspage",
            element:<MentorsPage/>,
        },
        {
            path:"homepageone",
            element:<HomePageOne/>,
        },
        {
            path:"homepagetwo",
            element:<HomePageTwo/>,
        },
        {
            path:"resourcespage",
            element:<ResourcesPage/>,
        },
        {
            path:"homepagefour",
            element:<HomePageFour/>,
        },
    ]);
    return element;
};

export default ProjectRoutes;