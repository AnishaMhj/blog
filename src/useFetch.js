
import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


 //useEffect is used to fetch data
    //runs when the component first renders, cannot make async()
    useEffect(() => {
        //abort controller to stop the fetch
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if(!res.ok){
                       throw Error('Could not fetch data for that resource'); 
                    }
                    return res.json()
                })
                .then((data) => {
                    // console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                //catch() catches any kind of network error and fires a function 
                .catch(err => {
                    if(err.name === 'AbortError'){
                        console.log('fetch aborted');
                    }
                    else{
                        setIsPending(false);
                        setError(err.message);
                    }                
                })
        }, 1000);

        return () => abortCont.abort(); 

    }, [url]);

    return{ data, isPending, error }
}

export default useFetch;