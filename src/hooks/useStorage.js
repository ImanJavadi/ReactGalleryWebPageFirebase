import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
export const useStorage=(file)=>{
    const [progress,setprogress]=useState();
    const [error,seterror]=useState();
    const [url,seturl]=useState();
    const storageref=ref(storage,file.name);
    const uploadtask=uploadBytesResumable(storageref,file); 
    uploadtask.on("state_changed",(snapshot)=>{
        setprogress((snapshot.bytesTransferred/snapshot.totalBytes)*100);
    },
    (err)=>{seterror(err)},
    async ()=>{
        const geturl=await getDownloadURL(storageref);
        seturl(geturl);
    }
    )
    return {progress,error,url} 
    
}