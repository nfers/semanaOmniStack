import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import './style.css'

import api from '../../services/api'

const Login = ({ history }) => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        sessionStorage.removeItem('user');
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();

        const { data } = await api.post(`/devs`, { username });

        const { _id } = data;

        if (!_id) return;

        sessionStorage.setItem('user', _id);

        history.push(`/main/${_id}`)
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} >
                <img src={logo} alt="Tindev" />
                <input
                    placeholder="Digite seu usuário do github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />

                <button type="submit" >Enviar</button>
            </form>
        </div>
    )
}

export default Login;