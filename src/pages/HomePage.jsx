import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [videogames, setVideogames] = useState([]);

    // Funzione per recuperare i progetti dall'API
    const fetchVideogame = () => {
        axios.get(`${backendUrl}`).then((resp) => {
            const { data } = resp.data;
            setVideogames(data);
        }).catch((error) => {
            console.error("Errore nel recupero dei progetti:", error);
        });
    };

    useEffect(() => {
        fetchVideogame();
    }, []);

    return (
        <>
            <div className="container">
                <h2 className="text-center text-white mb-5">I tuoi videogiochi preferiti a portata di click!</h2>

                {/* La riga corretta per usare il layout delle colonne */}
                <div className="row">
                    {videogames.length > 0 ? (
                        videogames.map((videogame) => (
                            <div className="col-md-4 mb-4" key={videogame.id}>
                                <div className="card h-100">
                                    <img 
                                        className="card-img-top" 
                                        src={`http://localhost:8000/storage/${videogame.image}`} 
                                        alt={videogame.name} 
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title title-game">{videogame.name}</h5>
                                        <Link to={`/videogames/${videogame.id}`} className="btn btn-primary">
                                            Dettagli
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Nessun progetto trovato.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default HomePage;