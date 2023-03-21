import React, { useState } from 'react'
import auth from '../../auth/auth';
import { useNavigate } from 'react-router-dom';
import "./login.css"

function Login() {
    const history = useNavigate()
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        let objectData = {
            role: 'student'
        }

        auth.loginInstance(objectData, () => {
            if (objectData.role === "student") {
                localStorage.setItem("token", "login")
                history('/student')
            } if (objectData.role === "admin") {
                history('/admin')
            }
            console.log("click")
        })

    };

    const handleSignup = () => {
        // handle signup logic here
    };

    return (
        <div className="container">
            <div className="card">
                <h2>{isLogin ? 'Login' : 'Sign up'}</h2>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {isLogin ? (
                        <button type="button" onClick={handleLogin}>
                            Login
                        </button>
                    ) : (
                        <button type="button" onClick={handleSignup}>
                            Sign up
                        </button>
                    )}
                </form>
                <p>
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}
                    <button type="button" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Sign up' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Login