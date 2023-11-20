import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManufacturerList = () => {
    const [manufacturers, setManufacturers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/manufacturers')
            .then(response => {
                console.log("API Response:", response.data);
                setManufacturers(response.data.manufacturers); // Access the manufacturers array
            })
            .catch(error => console.error('Error:', error));
    }, []);
    

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Manufacturers</h1>
            <ul>
                {Array.isArray(manufacturers) && manufacturers.map(manufacturer => (
                    <li key={manufacturer._id} className="mb-2">
                        {manufacturer.name} - Founded: {new Date(manufacturer.founded).getFullYear()}
                    </li>
                ))}
            </ul>
        </div>
    );
    
};

export default ManufacturerList;
