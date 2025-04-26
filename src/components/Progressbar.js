import { useEffect } from "react";
import { useStorage } from "../hooks/useStorage"

export const Progressbar=({file,setfile})=>{
   const {progress,url}=useStorage(file);
   useEffect(()=>{
    if(url){
        setfile(null);
        
    }

   },[url,setfile]);
    return(
        <div className="progress-bar" style={{width:progress+'%'}}>progress</div>
    )
}