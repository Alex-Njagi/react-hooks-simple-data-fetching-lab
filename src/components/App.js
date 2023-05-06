// create your App component here
import React, {useEffect, useState} from "react";

function App () {
    const [dog, setDog] = useState('')
    const [load, setLoad] = useState(true)

    useEffect(()=>{
        fetch ('https://dog.ceo/api/breeds/image/random')
        .then ((res)=>res.json())
        .then (setLoad(false))
        .then ((dog)=>setDog(dog))
        
    }, [])

    return (
        <div>
        <img 
            src={dog.message}
            alt="A Random Dog"
        />
        {load && (
            <p>Loading...</p>
            )}
        </div>
    )
}

export default App