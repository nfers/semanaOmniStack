import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './style.css'

import api from '../../services/api'

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

const Main = ({ match }) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function loadUsers() {
            const { data } = await api.get('/devs', {
                headers: { user: sessionStorage.getItem('user') }
            })

            setUsers(data);
        }

        loadUsers();
    }, [match.params.id]);

    async function handleLike(id) {
        await api.post(`/devs/${id}/likes`);

        setUsers(users.filter(user => user._id !== id))
    }

    async function handleDislike(id) {
        await api.post(`/devs/${id}/dislikes`);

        setUsers(users.filter(user => user._id !== id))
    }

    return (
        <div className="main-container">
            <Link to='/'>
                <img src={logo} alt="Tindev" />
            </Link>
            {
                users.length > 0 ?
                    (
                        <ul>
                            {
                                users.map(user => (
                                    <li key={user._id}>
                                        <img src={user.avatar} alt={user.name} />
                                        <footer>
                                            <strong>{user.name}</strong>
                                            <p>{user.bio}</p>
                                        </footer>
                                        <div className="buttons">
                                            <button onClick={() => handleDislike(user._id)} type="button">
                                                <img src={dislike} alt="Dislike" />
                                            </button>
                                            <button onClick={() => handleLike(user._id)} type="button">
                                                <img src={like} alt="Like" />
                                            </button>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    ) : (
                        <div className="empty" >Acabou :(</div>
                    )
            }

        </div>
    )
}

export default Main;