
import { useState, useEffect } from 'react';
import BlogList from './BlogList';


const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, ssetIsPending] = useState(true);
    const [error, setError] = useState(null);


    //define here to interact with data directly and pass as props
    // const handleDelete = (id) => {
    //     //return new filtered array
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    //useEffect is used to fetch data
    //runs when the component first renders, cannot make async()
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if(!res.ok){
                       throw Error('Could not fetch data for that resource'); 
                    }
                    return res.json()
                })
                .then((data) => {
                    // console.log(data);
                    setBlogs(data);
                    ssetIsPending(false);
                    setError(null);
                })
                //catch() catches any kind of network error and fires a function 
                .catch(err => {
                    ssetIsPending(false);
                   setError(err.message);
                })
        }, 1000);
    }, []);

    return ( 
        <div className="home">

            {/* conditional templating  */}
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        
        </div>
     );
}
 
export default Home;