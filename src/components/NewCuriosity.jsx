import React, { useEffect, useState } from "react";
import { getCuriosity } from "../services/services";
import { CopyToClipboard } from "react-copy-to-clipboard";


function NewCuriosity() {
  const [curiosity, setCuriosity] = useState();
  

  useEffect(() => {
    (async () => {
      const c = await getCuriosity();
      console.log(c);
      setCuriosity(c);
     
    })();
  }, []);
  console.log(curiosity);

  const saveCuriosity =()=> {
   
    
    const Ncuriosity = localStorage.getItem("curiosity");
    console.log(curiosity);
    if (Ncuriosity){
       const a = JSON.parse(Ncuriosity);
       a.push(curiosity);
       localStorage.setItem("curiosity", JSON.stringify(a));
    }else{
        
        const b = [curiosity];
        localStorage.setItem("curiosity", JSON.stringify(b));

    }
  }
  return (
    <div className="note">
      <img className="img_mediana" src={"https://cataas.com/cat"} alt="" />
      <h1>{curiosity}</h1>
      <CopyToClipboard text={curiosity}>
      <button className="note button">copy</button>
      </CopyToClipboard>
      <button className="note button" onClick={saveCuriosity}>save</button>
      
    </div>
  );
}  
   

export default NewCuriosity;