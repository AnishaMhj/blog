
import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
  

    //define here to interact with data directly and pass as props
    // const handleDelete = (id) => {
    //     //return new filtered array
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

   
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