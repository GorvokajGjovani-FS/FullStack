import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AddCar = () => {
    const [car, setCar] = useState({
        model: '',
        year: '',
        manufacturer: '',
        price: '',
        isAvailable: true 
    });
    const [errors, setErrors] = useState({});
    const [submissionMessage, setSubmissionMessage] = useState('');
    const navigate = useNavigate(); // Create the navigate function

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCar((previousCar) => ({
            ...previousCar,
            [name]: value
        }));
    };

    const validate = () => {
        let tempErrors = {};
        // Simple validation checks
        tempErrors.model = car.model ? "" : "Model is required.";
        tempErrors.year = car.year ? "" : "Year is required.";
        tempErrors.manufacturer = car.manufacturer ? "" : "Manufacturer is required.";
        tempErrors.founded = car.founded ? "" : "Manufacturer Founded is required.";
        tempErrors.price = car.price ? "" : "Price is required.";

        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validate()) {
            setSubmissionMessage("Please correct the errors before submitting.");
            return;
        }
        axios.post('http://localhost:3000/api/v1/cars', car)
            .then(response => {
                setSubmissionMessage("Car added successfully!");
                setCar({ model: '', year: '', manufacturer: '', founded: '', price: '', isAvailable: true });
                navigate('/cars'); // Redirect to the cars list
            })
            .catch(error => {
                console.error('Error:', error);
                setSubmissionMessage("Failed to add car.");
            });
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Add Car</h1>
            <h3 className="text-xl mb-4">(Add Manufacturer First before adding a new car)</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Model:</label>
                    <input type="text" name="model" value={car.model} onChange={handleChange} />
                    {errors.model && <div className="error">{errors.model}</div>}
                </div>
                <div>
                    <label>Year:</label>
                    <input type="number" name="year" value={car.year} onChange={handleChange} />
                    {errors.year && <div className="error">{errors.year}</div>}
                </div>
                <div>
                    <label>Manufacturer:</label>
                    <input type="text" name="manufacturer" value={car.manufacturer} onChange={handleChange} />
                    {errors.manufacturer && <div className="error">{errors.manufacturer}</div>}
                </div>
                <div>
                    <label>Manufacturer Founded:</label>
                        <input
                            type="date"
                            name="founded"
                            value={car.founded}
                            onChange={handleChange}
                        />
                    {errors.founded && <div className="error">{errors.founded}</div>}
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name="price" value={car.price} onChange={handleChange} />
                    {errors.price && <div className="error">{errors.price}</div>}
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Car
                </button>
                {submissionMessage && <div className="message">{submissionMessage}</div>}
            </form>
        </div>
    );
};

export default AddCar;
