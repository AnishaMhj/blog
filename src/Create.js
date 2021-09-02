
import { useState } from 'react';
import { useHistory} from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Anisha');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    
    const handleSubmit= (e) =>{
        e.preventDefault(); //prevent page from refresh
        const blog = { title, body, author };

        setIsPending(true);

       // post request here as it only makes request once in whole application
       //second argument here, tack on the data as well as define the type of request we are sending or a method 
       setTimeout(() => {
       fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"}, //type of content were are sending with request
            body: JSON.stringify(blog) //data being send, firstly changed into object from string
        })
        //promise
        .then(() => {
            console.log('new blog added');
            setIsPending(false);
            //history.go(-1);
            history.push('/'); //route for homepage
        })
        
       
    }, 
    1000);
    }

    return (  
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>

                <label>Blog Title:</label>
                <input 
                    type="text"
                    value= {title}
                    onChange={(e) => setTitle(e.target.value)}
                    required/>

                <label>Blog Body:</label>
                <textarea 
                    value= {body}
                    onChange={(e) => setBody(e.target.value)}
                    required></textarea>
                     
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="Mario">Anisha</option>
                    <option value="Yoshi">Abhishekh</option>
                </select>

                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog...</button> }
            </form>
        </div>
    );
}
 
export default Create;