import React from "react";
import Home from "./Component/Route/Home";
import About from "./Component/Route/About";
import Contact from "./Component/Route/Contact";
const routes=[
    {
        path:'/',
        exact:true,
        min: () => {Home}

    },
    
    {
        path:'/about',
        exact:true,
        min: () => {About}

    },
    {
        path:'/contact',
        exact:true,
        min: () => {Contact}

    }
]