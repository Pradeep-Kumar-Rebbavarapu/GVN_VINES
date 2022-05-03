import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Context = createContext()

export default Context

export const ContextProvider = ({children})=>{
    const [authtoken,setauthtoken] = useState(localStorage.getItem('authtoken')?JSON.parse(localStorage.getItem('authtoken')):null)

    let location = useLocation() 

    const [userdetails,setuserdetails] = useState(authtoken?JSON.parse(localStorage.getItem('userdetails')):null)

    const [AllVideos,setAllVideos] = useState([])

    const [postvalue,setpostvalue] = useState(localStorage.getItem('postvalue')?localStorage.getItem('postvalue'):null)

    const [url,seturl] = useState(localStorage.getItem('url')?localStorage.getItem('url'):null)

    let [eachvideo, seteachvideo] = useState(null)

    let navigate = useNavigate()

    let [alert,setalert] = useState({message:"alert",className:"",hidden:"hidden"})

    
    const [loading,setloading] = useState(false)

    
    

    
    const ContextData = {
        authtoken:authtoken,
        setauthtoken:setauthtoken,
        userdetails:userdetails,
        setuserdetails:setuserdetails,
        AllVideos:AllVideos,
        setAllVideos:setAllVideos,
        postvalue:postvalue,
        setpostvalue:setpostvalue,
        url:url,
        seturl:seturl,
        eachvideo:eachvideo,
        seteachvideo:seteachvideo,
        loading:loading,
        setloading:setloading,
        alert:alert,
        setalert:setalert,
    }
    return (
        <Context.Provider value={ContextData}>
            {children}
        </Context.Provider>
    )
}