import React from 'react';

const Signin = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <div className='sign-in'>
            <form>
                <h1>Login In</h1>
                <input type="email" placeholder='Enter your email' value={email}/>
                <input type="password" placeholder='Enter your password' value={password}/>
            </form>
        </div>
    );
}

export default Signin;
