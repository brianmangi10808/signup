import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const logout = () => {
        localStorage.removeItem("signUp");
        window.location.reload();
    }

    const deleteAccount = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div className='home'>
            <h1>Welcome to our website!</h1>

            <h1>Home</h1>

           
            <button onClick={logout} className='logout'>1</button>
            <button onClick={deleteAccount} className='delete'>Back to sign in</button>
            <h1>Some content here</h1>
        </div>
    );
}

export default Home;
