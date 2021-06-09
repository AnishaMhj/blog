//click events
const handleClick = (e) => {
    console.log('Hello, Ninjas!!', e);
}

const handleClickAgain = (name) => {
    console.log('Hello ' + name);
}


return ( 
    <div className="home">
        <h2>Homepage</h2>
        <button onClick={ handleClick }>Click me</button>
        <button onClick={ () =>{
            handleClickAgain('Anisha')
        }
        }>Click me again</button>
    </div>
 );
}

//state


import { useState } from 'react';

const Home = () => {

    // let name = 'mario';

    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('luigi');
        setAge(30);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old.</p>
            <button onClick={ handleClick }>Click me</button>
           
        </div>
     );
}
 
export default Home;