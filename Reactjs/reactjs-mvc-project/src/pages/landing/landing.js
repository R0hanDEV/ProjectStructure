
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../../modules/login/login'


function Landing() {
    const history = useNavigate()
    return (
        <div>

            {
                localStorage.getItem('token') !== '' || localStorage.getItem('token') !== null ? history('student') : <Login />
            }
            
        </div>
    )
}

export default Landing
