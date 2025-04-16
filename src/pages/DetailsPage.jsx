import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
    const { id } = useParams();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [videogame, setVideogame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProject = () => {
        axios.get(`${backendUrl}/${id}`)
            .then((resp) => {
                setVideogame(resp.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Errore nel recupero del progetto:", err);
                setError("Errore nel caricamento del progetto");
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchProject();
    }, [id]);

    if (loading) {
        return <p className="text-center">Caricamento...</p>;
    }

    if (error) {
        return <p className="text-center text-danger">{error}</p>;
    }

    return (
        <>
            <div className="container">

                <a href="/" className="btn btn-primary mb-3">
                    Torna ai videogiochi
                </a>

                <h2 className="text-white mb-3">Dettagli videogioco</h2>

                <div className="card mb-5">
                    <div className="card-header title-game">
                        {videogame.name}
                    </div>
                    <div className="card-body">
                        {videogame.genres && videogame.genres.length > 0 && (
                            videogame.genres.map((genre, index) => (
                                <span
                                    key={index}
                                    className="badge mb-3 me-2"
                                    style={{ backgroundColor: genre.color }}
                                >
                                    {genre.name}
                                </span>
                            ))
                        )}
                        
                        <h5 className="card-title">
                            <strong>Piattaforma: </strong>{videogame.platform?.name || "N/A"}
                        </h5>
            
                        <p className="card-text">{videogame.description}</p>

                        <h5 className="card-title">
                            <strong>Anno di uscita: </strong>{videogame.release_year || "N/A"}
                        </h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsPage;