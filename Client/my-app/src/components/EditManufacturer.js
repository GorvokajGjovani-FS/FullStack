
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams

const EditManufacturer = () => {
    const [manufacturer, setManufacturer] = useState({
        name: '', 
        founded: '', 
        headquarters: '', 
        ceo: ''
    });

    const { id } = useParams(); // Use useParams to access the route parameter

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/manufacturers/${id}`) // Use the id from useParams
            .then(response => {
                setManufacturer(response.data.manufacturer); // Adjust according to the API response structure
            })
            .catch(error => console.error('Error:', error));
    }, [id]);

    const handleInputChange = (e) => {
        setManufacturer({ ...manufacturer, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3000/api/v1/manufacturers/${manufacturer._id}`, manufacturer)
            .then(response => {
                console.log(response);
                // Post-update logic here
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Manufacturer</h1>
            <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="mb-4">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={manufacturer.name} onChange={handleInputChange} />
                </div>

                {/* Founded Date Input */}
                <div className="mb-4">
                    <label htmlFor="founded">Founded</label>
                    <input type="date" id="founded" name="founded" value={manufacturer.founded?.split('T')[0]} onChange={handleInputChange} />
                </div>

                {/* Headquarters Input */}
                <div className="mb-4">
                    <label htmlFor="headquarters">Headquarters</label>
                    <input type="text" id="headquarters" name="headquarters" value={manufacturer.headquarters} onChange={handleInputChange} />
                </div>

                {/* CEO Input */}
                <div className="mb-4">
                    <label htmlFor="ceo">CEO</label>
                    <input type="text" id="ceo" name="ceo" value={manufacturer.ceo} onChange={handleInputChange} />
                </div>

                {/* Submit Button */}
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Update Manufacturer
                </button>
            </form>
        </div>
    );
};

export default EditManufacturer;
