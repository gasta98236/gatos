import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function CreateArea(props) {

  const [curiosities, setCuriosities] = useState([]);

  useEffect(() => {
    const c = localStorage.getItem("curiosity");
    if(c) {
     const d = JSON.parse(c);
      setCuriosities(d);
    }
  },[]);

  return (
    <div className="note">
      <ul>
        {curiosities.map((c, index) => (<li key={index}>
        <img src="" alt="" />
        
        <p>{c}</p>
        </li>))}
        <CopyToClipboard text={curiosities}><button className="note button">copy</button></CopyToClipboard>
      </ul>
      
    </div>
  );
}

export default CreateArea;
