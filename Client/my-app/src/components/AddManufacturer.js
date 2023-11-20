import React, { useState } from 'react';
import axios from 'axios';

const AddManufacturer = () => {
    const [manufacturer, setManufacturer] = useState({ 
        name: '', 
        founded: '', 
        headquarters: '', 
        ceo: '' 
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/api/v1/manufacturers', manufacturer)
            .then(response => {
                console.log(response);
                // Handle post-submit logic (e.g., clear form, show success message)
            })
            .catch(error => console.error('Error:', error));
    };

    // Update state for each form field
    const handleInputChange = (e) => {
        setManufacturer({ ...manufacturer, [e.target.name]: e.target.value });
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Add Manufacturer</h1>
            <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" name="name" onChange={handleInputChange} />
                </div>

                {/* Founded Date Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="founded">Founded</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="founded" type="date" name="founded" onChange={handleInputChange} />
                </div>

                {/* Headquarters Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="headquarters">Headquarters</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="headquarters" type="text" placeholder="Headquarters" name="headquarters" onChange={handleInputChange} />
                </div>

                {/* CEO Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ceo">CEO</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ceo" type="text" placeholder="CEO" name="ceo" onChange={handleInputChange} />
                </div>

                {/* Submit Button */}
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Manufacturer
                </button>
            </form>
        </div>
    );
};

export default AddManufacturer;
