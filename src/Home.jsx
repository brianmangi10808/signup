import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const login = () => {
        localStorage.removeItem("signUp");
        window.location.reload();
    }

    const back = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div className='home'>
            <h1>Welcome to our website!</h1>

            <h1>Home</h1>

           
            <button onClick={login} className='login'>1</button>
            <button onClick={back} className='back'>Back to sign in</button>
            <h1>Some content here</h1>
        </div>
    );
}

export default Home;
