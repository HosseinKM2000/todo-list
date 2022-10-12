import { createContext } from "react";

const loginContext = createContext({
    login : 'variable',
    dispatch : 'dispatch',
    user:{},
})

export default loginContext 