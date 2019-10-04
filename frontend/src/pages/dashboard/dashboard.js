import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './dashboard.css';


export default function Dashboard() {
    const [ spots, setSpots] = useState([]);
    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('http://localhost:3031/dashboard', {
                headers: { user_id }
            });
            setSpots(response.data);
        }
        loadSpots();
    }, []);

    return ( 
        <>
            <ul className="spot-list">
                {spots.map(spot  => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }}/>
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R${spot.price}/dia` :'Gratuito'}</span>
                    </li>
                ))}
            </ul>

            <Link to="/new">
                Cadastrar novo Espaço
            </Link>
        </>
    )
}


//20191003-10: ajuste no model spot