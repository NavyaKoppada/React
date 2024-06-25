import { useEffect, useState } from "react";

function useCounter(increment){
    let [counter,setcounter] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(increment)
                {setcounter(prevCounter => prevCounter + 1);}
            else
                {setcounter(prevCounter => prevCounter - 1);}
        },1000)

        return ()=> clearInterval(interval);
    },[]);

    return counter;
}

export default useCounter;