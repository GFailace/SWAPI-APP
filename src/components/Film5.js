import React, { useState, useEffect } from "react"
import './Film.css'
import II from '../assets/II.jpg'

export default function Film5() {
    const [film, setFilm] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const response = await fetch(`https://swapi.co/api/films/5`);
            const data = await response.json()

            setFilm(data)
        }

        fetchData()

    }, []);


    return (
        <div>
            <div className="card">
                <img src={II} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{JSON.stringify(film.title)}</h5>
                    <p className="card-text">{film.opening_crawl}</p>
                    <a data-toggle="collapse" href="#collapse5" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Mais infos
                  </a>
                    <div className="collapse" id="collapse5">
                        <br />
                        Episódio - {film.episode_id}<br />
                        Diretor - {film.director}<br />
                        Produtor - {film.producer}<br />
                        Data de Lançamento - {film.release_date}<br />
                    </div>
                </div>
            </div>
        </div>
    );
};