import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {db, storage} from "../firebase/config";
import { useEffect, useState } from "react";
import { addDoc,collection,serverTimestamp } from "firebase/firestore";


export const useStorage=(file)=>{
    const [progress,setprogress]=useState();
    const [error,seterror]=useState();
    const [url,seturl]=useState();
    useEffect(()=>{
    const collectionref=collection(db,"images");
    const storageref=ref(storage,file.name);
    const uploadtask=uploadBytesResumable(storageref,file); 
    const unsub= uploadtask.on("state_changed",(snapshot)=>{
        setprogress((snapshot.bytesTransferred/snapshot.totalBytes)*100);
    },
    (err)=>{seterror(err)},
    async ()=>{
        const geturl=await getDownloadURL(storageref);
        seturl(geturl);
        await addDoc(collectionref,{imageurl:url,createddate:serverTimestamp()});
    }
    )
    return ()=>unsub()
    },[file]) 
    return {progress,error,url} 
    
}