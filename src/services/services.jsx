


export const getCuriosity = async() =>{
   const respons = await fetch("https://catfact.ninja/fact");
   const data = await (respons.json());
   console.log(data, 3)
   return data.fact;
}

/*export const getImage = async() =>{
    const respons = await fetch("https://cataas.com/" , {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "GET",
    });
    const data = await (respons.json());
    console.log(data, 3)
    return data.fact;
 }*/
 


