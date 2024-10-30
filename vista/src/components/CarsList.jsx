import { useEffect, useState } from "react";
import { getAllCars } from "../api/cars.api";
import { CarCard } from "./CarCard";

export function CarsList() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        async function loadCars() {
            try {
                const res = await getAllCars();
                setCars(res.data);
            } catch (error) {
                console.error("Error al cargar los autos:", error);
            }
        }
        loadCars();
    }, []);

    return (
        <div>
            {cars.length > 0 ? (
                cars.map((car) => (
                    
                    <CarCard key={car.id} car={car}/>
                ))
            ) : (
                <p>No hay datos disponibles</p>
            )}
        </div>
    );
}
