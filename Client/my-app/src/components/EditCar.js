import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams

const EditCar = () => {
    const [car, setCar] = useState({
        model: '',
        year: '',
        manufacturer: '',
        price: '',
        isAvailable: true
    });
    const { id } = useParams(); 

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/cars/${id}`)
            .then(response => {
                setCar(response.data);
            })
            .catch(error => console.error('Error:', error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCar({ ...car, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3000/api/v1/cars/${car._id}`, car)
            .then(response => {
                console.log(response);
                // Handle post-submit logic
            })
            .catch(error => console.error('Error:', error));
    };

    if (!car) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Car</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Model:</label>
                    <input
                        type="text"
                        name="model"
                        value={car.model}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Year:</label>
                    <input
                        type="number"
                        name="year"
                        value={car.year}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Manufacturer:</label>
                    <input
                        type="text"
                        name="manufacturer"
                        value={car.manufacturer}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={car.price}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Update Car
                </button>
            </form>
        </div>
    );
};

export default EditCar;
