import { useState } from "react";
import {Progressbar} from "./Progressbar";
import { ImageGrid } from "./ImageGrid";

export default function  UploadForm(){
    const [file,setfile]=useState();
    const [error,seterror]=useState();
    
    const handlechange=(e)=>{
    const validtype=['image/jpeg','image/png'];
    let selected=e.target.files[0];
    if(selected && validtype.includes(selected.type)){
        seterror('');
       setfile(selected);  
    }
    else{
        setfile(null);
        seterror('your image type selected is incorrect!');
    }
    
    }
    return(
        <div>
            <form>
                <label>
                    <input type="file" onChange={handlechange}></input>
                    <span>+</span>
                </label>
            
            <div className="output">
                {error&& <div className="error">{error}</div>}
                {file&& <div className="file">{file.name}</div>}
                {file&& <Progressbar file={file} setfile={setfile}/>}
                {<ImageGrid/>}
            </div>
            </form>
        </div>
    )
}