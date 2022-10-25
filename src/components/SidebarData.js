import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InfoIcon from '@mui/icons-material/Info'


export const SidebarData =[
    {
        title: "Home",
        icon: <HomeIcon/>,
        link:"/home"
    },
    {
        title: "Assignements",
        icon: <AssignmentIcon/>,
        link:"/assignements"
    },
    {
        title: "Project Stages",
        icon: <HomeIcon/>,
        link:"/project"
    },
    {
        title: "About Us",
        icon: <InfoIcon/>,
        link:"/about"
    }
];