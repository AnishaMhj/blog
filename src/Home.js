
import { useState } from 'react';
import BlogList from './BlogList';


const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'loerm ipsum...', author: 'anisha', id: 1 },
        { title: 'Welcome party!', body: 'loerm ipsum...', author: 'abhishekh', id: 2 },
        { title: 'Web dev top tips', body: 'loerm ipsum...', author: 'mario', id: 3 }
    ]);

    //define here to interact with data directly and pass as props
    const handleDelete = (id) => {
        //return new filtered array
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
        
            {/* Reusing components */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!" /> */}


        </div>
     );
}
 
export default Home;