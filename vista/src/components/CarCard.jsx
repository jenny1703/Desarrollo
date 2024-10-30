import { useNavigate } from "react-router-dom";
import "../styles/CarCard.css";


export function CarCard({ car }) {
    const navigate = useNavigate();

    return (
        <div
            style={{ background: "#E280BE", padding: "10px", cursor: "pointer", marginBottom: "10px" }}
            onClick={() => navigate(`/car/${car.id}`)}
        >  
            <h1>{car.Marca}</h1>
            <p>Sucursal: {car.Sucursal}</p>
            <p>Aspirante: {car.Aspirante}</p>
            <hr />
        </div>
    );
}
