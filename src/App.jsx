

import { useEffect, useState } from "react";

function App()
{
  const [posts, setPosts]=useState([]);

  useEffect(() =>{
    fetch(`https://fakestoreapi.com/products/1`)
    .then((response) => {
    return response.json();

    })
    .then(data =>{
      setPosts(data);
    })
    .catch((error)=> {
      console.log('error',error)
    })
   },[]);
  useEffect(()=>
  {
    console.log(posts);

  },[posts])


  
   
  
  
  return(
    <div>
     <h1>post.id</h1>
     <ul></ul>
     {
      
     }
   
    </div>

  )
}
export default App;