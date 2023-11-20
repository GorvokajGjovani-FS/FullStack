import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import DeleteCar from './DeleteCar';

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/cars')
            .then(response => {
                console.log("API Response:", response.data); // Check the API response
                setCars(response.data.cars || []); // Access the cars array, with a fallback to an empty array
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Cars</h1>
            <ul>
                {Array.isArray(cars) && cars.map(car => (
                    <li key={car._id} className="mb-2">
                        {car.model} - {car.manufacturer && car.manufacturer.name}
                        {/* <DeleteCar /> */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;
