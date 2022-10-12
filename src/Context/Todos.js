import React from "react";

const todosContext = React.createContext({
    todos : [],
    add : ()=>{},
    delete : ()=>{},
    toggle : ()=>{},
    edit : ()=>{},
    login : 'boolean',
    status:'boolean',
    dispatch:'dispatch',
    blue:'svg',
    red:'svg',
    yellow:'svg',
    green:'svg',
    orange:'svg',
    loading:'boolean',
    src:'value.svg',
});

export default todosContext