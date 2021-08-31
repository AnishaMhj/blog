
import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, ssetIsPending] = useState(true);
    const [error, setError] = useState(null);


 //useEffect is used to fetch data
    //runs when the component first renders, cannot make async()
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok){
                       throw Error('Could not fetch data for that resource'); 
                    }
                    return res.json()
                })
                .then((data) => {
                    // console.log(data);
                    setData(data);
                    ssetIsPending(false);
                    setError(null);
                })
                //catch() catches any kind of network error and fires a function 
                .catch(err => {
                    ssetIsPending(false);
                   setError(err.message);
                })
        }, 1000);
    }, [url]);

    return{ data, isPending, error }
}

export default useFetch;