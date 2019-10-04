import React, { useState, useMemo } from 'react';
import camera from '../../assets/camera.svg';
import api from '../../services/api';

import './newSpot.css';

export default function NewSpot({ history}) {
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
    const [thumbnail, setthumbnail] = useState(null);

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])

    async function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        await api.post('http://localhost:3031/spots', data, {
            headers: { user_id }
        })

        history.push('/dashboard');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label id="thumbnail" style={{ backgroundImage: `url(${preview})` }}>
                <input type="file" onChange={event => setthumbnail(event.target.files[0])}/>
                <img src={camera} alt="Seleciona a imagem" />
            </label>

            <label htmlFor="company"> Empresa *</label>
            <input 
                id="company"
                placeholder="Sua Empresa"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />
            
            <label htmlFor="techs"> Tecnologias * <span>(separadas por virgula)</span> </label>
            <input 
                id="techs"
                placeholder="Quais são as tecnologias?"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />

            <label htmlFor="price"> Valor da Diaria * <span>(em branco se for gratuito)</span> </label>
            <input 
                id="price"
                placeholder="Valor Cobrado por dia"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />
            <button type="submit" className="btn"> Salvar</button>
        </form>
    )
}